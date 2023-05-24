// const inputEl = document.querySelector("#validation-input");
// const inputLengthEl = Number(inputEl.dataset.length);

// const handlValid = (e) => {
//     const evt = e.currentTarget;
//     if (evt.value.trim().length === inputLengthEl) {
//         evt.classList.remove("invalid");
//     evt.classList.add("valid");
        
//     } else
//     evt.classList.remove("valid");
//         evt.classList.add("invalid");
    
// };

// inputEl.addEventListener("blur", handlValid);


const inputEl = document.querySelector("#validation-input");
const inputLengthEl = Number(inputEl.getAttribute("data-length"));

const handleBlur = (e) => {
  const evt = e.currentTarget;
  if (evt.value.length === inputLengthEl) {
    evt.classList.add("valid");
      evt.classList.remove("invalid");
  } else {
    evt.classList.add("invalid");
    evt.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", handleBlur);
