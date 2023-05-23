function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');



const createBoxes = () => {
  const amount = Number(inputEl.value);
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

const destroyBoxes = () =>  {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);