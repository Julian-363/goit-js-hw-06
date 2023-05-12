const controlsDiv = document.querySelector('#controls');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  // Obtener la cantidad de cuadros del input
  const amount = parseInt(controlsDiv.querySelector('input').value);

  // Crear una matriz de elementos div y darles estilos
  const boxes = Array(amount).fill().map((_, i) => {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
    `;
    return box;
  });

  // Agregar los cuadros a la página
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}