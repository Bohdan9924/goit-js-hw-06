const fontSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const updateFontSize = (e) => {
    textEl.style.fontSize = e.currentTarget.value + "px";
};

fontSize.addEventListener("input", updateFontSize);
