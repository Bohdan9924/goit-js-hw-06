const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const ingrEl = ingredients.map(() => document.createElement("li"));
ingrEl.map((el, index) => {
  el.textContent = ingredients[index];
  el.classList.add("item");
});
ingredientsEl.append(...ingrEl);