const categoriesEl = document.querySelectorAll(".item")
console.log("Numbers of categories:" + categoriesEl.length);
categoriesEl.forEach((element) => {
    console.log("Category:" + element.firstElementChild.textContent);
    console.log("Elements: " + element.lastElementChild.childElementCount);
});