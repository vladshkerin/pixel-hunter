/** **************************************************************
 *************** Модуль экрана с правилами игры ******************
 ************************************************************** **/

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import getHeaderTemplate from './header-template';
import getFooterTemplate from './footer-template';
import gameOneElem from './game-one';
import greetingElem from './greeting';

const rulesElem = getElementFromTemplate(`
  ${getHeaderTemplate(null, false)}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${getFooterTemplate()}`);

const rulesBtnElem = rulesElem.querySelector(`.rules__button`);
rulesBtnElem.addEventListener(`click`, () => drawBlock(gameOneElem));

const rulesInputElem = rulesElem.querySelector(`.rules__input`);
rulesInputElem.addEventListener(`input`, (evt) => {
  if (evt.target.value.length > 0) {
    rulesBtnElem.removeAttribute(`disabled`);
  } else {
    rulesBtnElem.setAttribute(`disabled`, `true`);
  }
});

const backElem = rulesElem.querySelector(`.back`);
backElem.addEventListener(`click`, () => drawBlock(greetingElem));

export default rulesElem;
