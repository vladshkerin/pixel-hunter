/** **************************************************************
 *************** Модуль экрана первой игры ***********************
 ************************************************************** **/

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import getHeaderTemplate from './header-template';
import getFooterTemplate from './footer-template';
import getStatsTemplate from './stats-template';
import gameTwoElem from './game-two';
import rulesElem from './rules';
import data from '../data';

const getFormTemplate = (answers) => `
  ${[...answers].map((answer, index) => `
    <div class="game__option">
      <img src=${answer.image} alt="Option ${index}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question${index}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${index}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`)
  .join(``)}`;

const getContentTemplate = (question, level) => `
  <div class="game">
    <p class="game__task">${question.text}</p>
    <form class="game__content">
      ${getFormTemplate(question.answers[level])}
    </form>
    <div class="stats">
      ${getStatsTemplate(data.stats)}
    </div>
  </div>`;

const gameOneElem = getElementFromTemplate(`
  ${getHeaderTemplate(data)}
  ${getContentTemplate(data.questions[data.level], data.level)}
  ${getFooterTemplate()}`);

const contentElem = gameOneElem.querySelector(`.game__content`);
contentElem.addEventListener(`change`, () => {
  if (contentElem.querySelectorAll(`input:checked`).length === 2) {
    drawBlock(gameTwoElem);
  }
});

const backElem = gameOneElem.querySelector(`.back`);
backElem.addEventListener(`click`, () => drawBlock(rulesElem));

export default gameOneElem;
