const counterEl = document.querySelector("#counter");
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const counterValueEl = counterEl.children[1];

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
})

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
})

// const decrementFnct = (e) => {
//     counterValue -= 1;
//     counterValueEl.textContent = counterValue;
// }; 

// const incrementFnct = (e) => {
//     counterValue += 1;
//     counterValueEl.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", decrementFnct);
// incrementBtn.addEventListener("click", incrementFnct);


