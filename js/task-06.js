const inputEl = document.querySelector("#validation-input");
const inputLengthEl = Number(inputEl.dataset.length);

const handlValid = (e) => {
    const evt = e.currentTarget;
    if (evt.value.trim().length === inputLengthEl) {
        evt.classList.remove("valid");
    evt.classList.add("valid");
        return;
    }
    evt.classList.remove("valid");
        evt.classList.add("invalid");
    
};

inputEl.addEventListener("blur", handlValid);

