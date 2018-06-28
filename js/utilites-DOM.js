// Функция создания элемента из шаблона
export const getElementFromTemplate = (template) => {
  if (!template) {
    throw new Error(`Invalid argument function: 'getElementFromTemplate'`);
  }

  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

// Функция отрисовки переданного блока на страницу
export const drawBlock = (elem) => {
  if (!elem) {
    throw new Error(`Invalid argument function`);
  }

  const central = document.querySelector(`.central`);
  central.innerHTML = ``;
  central.appendChild(elem);
};
