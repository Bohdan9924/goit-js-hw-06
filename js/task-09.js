function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorBtnEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

const handleBodyEl = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorTextEl.textContent = color;
};

colorBtnEl.addEventListener("click", handleBodyEl);



