/** **************************************************************
 *************** Модуль экрана третьей игры **********************
 ************************************************************** **/

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import getHeaderTemplate from './header-template';
import getFooterTemplate from './footer-template';
import getStatsTemplate from './stats-template';
import statsElem from './stats.js';
import gameTwo from './game-two';
import data from '../data';

const getFormTemplate = (answers) => `
  ${[...answers].map((answer) => `
    <div class="game__option">
      <img src=${answer.image} alt="Option 1" width="304" height="455">
    </div>`)
  .join(``)}`;

const getContentTemplate = (question, level) => `
  <div class="game">
    <p class="game__task">${question.text}</p>
    <form class="game__content  game__content--triple">
      ${getFormTemplate(question.answers[level])}
    </form>
    <div class="stats">
      ${getStatsTemplate(data.stats)}
    </div>
  </div>`;

const gameThreeElem = getElementFromTemplate(`
  ${getHeaderTemplate(data)}
  ${getContentTemplate(data.questions[data.level + 2], data.level + 2)}
  ${getFooterTemplate()}`);

const gameOptionElem = gameThreeElem.querySelectorAll(`.game__option`);
gameOptionElem.forEach((el) => {
  el.addEventListener(`click`, () => {
    drawBlock(statsElem);
  });
});

const backElem = gameThreeElem.querySelector(`.back`);
backElem.addEventListener(`click`, () => drawBlock(gameTwo));

export default gameThreeElem;
