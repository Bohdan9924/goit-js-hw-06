const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredEl = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
});
ingredientsEl.append(...ingredEl);

// const ingrEl = ingredients.map(() => document.createElement("li"));
// ingrEl.map((el, index) => {
//   el.textContent = ingredients[index];
//   el.classList.add("item");
// });
// ingredientsEl.append(...ingrEl);