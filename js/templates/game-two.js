/** **************************************************************
 *************** Модуль экрана второй игры ***********************
 ************************************************************** **/

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import {isChecked} from '../utils';
import getHeaderTemplate from './header-template';
import getFooterTemplate from './footer-template';
import getStatsTemplate from './stats-template';
import gameThreeElem from './game-three';
import gameOneElem from './game-one';
import data from '../data';

const getFormTemplate = (answers) => `
  ${[...answers].map((answer, index) => `
    <div class="game__option">
      <img src=${answer.image} alt="Option ${index + 1}" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question${index + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question${index + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`)
  .join(``)}`;

const getContentTemplate = (question, level) => `
  <div class="game">
    <p class="game__task">${question.text}</p>
    <form class="game__content  game__content--wide">
      ${getFormTemplate(question.answers[level])}
    </form>
    <div class="stats">
      ${getStatsTemplate(data.stats)}
    </div>
  </div>`;

const gameTwoElem = getElementFromTemplate(`
  ${getHeaderTemplate(data)}
  ${getContentTemplate(data.questions[data.level + 1], data.level + 1)}
  ${getFooterTemplate()}`);

const gameAnswerElem = gameTwoElem.querySelectorAll(`.game__answer`);
gameAnswerElem.forEach((el) => {
  el.addEventListener(`click`, () => {
    if (isChecked(el, `question1`)) {
      drawBlock(gameThreeElem);
    }
  });
});

const backElem = gameTwoElem.querySelector(`.back`);
backElem.addEventListener(`click`, () => drawBlock(gameOneElem));

export default gameTwoElem;
