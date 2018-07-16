/** **************************************************************
 *************** Модуль начального экрана ************************
 ************************************************************** **/

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import getFooterTemplate from './footer-template';
import greetingElem from './greeting';

const introElem = getElementFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>
  </div>
  ${getFooterTemplate()}`);

const introAsteriskElem = introElem.querySelector(`.intro__asterisk`);
introAsteriskElem.addEventListener(`click`, () => drawBlock(greetingElem));

export default introElem;
