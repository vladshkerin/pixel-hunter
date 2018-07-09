// Функция создания элемента из шаблона

const central = document.querySelector(`.central`);

const getElementFromTemplate = (template) => {
  if (!template) {
    throw new Error(`Invalid argument function: 'getElementFromTemplate'`);
  }

  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

// Функция отрисовки переданного блока на страницу
const drawBlock = (elem) => {
  if (!elem) {
    throw new Error(`Invalid argument function`);
  }

  central.innerHTML = ``;
  central.appendChild(elem);
};

export {getElementFromTemplate, drawBlock};
