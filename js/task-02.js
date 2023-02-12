const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listEl = document.querySelector(`#ingredients`);

// const listElementToAdd = [];
// ingredients.forEach( ingredient => {

// const ingredientsEl = document.createElement('li');
// ingredientsEl.textContent = ingredient;
// ingredientsEl.classList.add('item');

// listElementToAdd.push(ingredientsEl);

// });
// listEl.append(...listElementToAdd);
// console.log(listElementToAdd);


const listRef = document.querySelector(`#ingredients`)
const itemElementAdd = [];

ingredients.forEach(el => {
  const ingredientsRef = document.createElement('li');
  ingredientsRef.textContent = el;
  itemElementAdd.push(ingredientsRef);
  ingredientsRef.classList.add('item');

})

listRef.append(...itemElementAdd)

console.log(itemElementAdd)
