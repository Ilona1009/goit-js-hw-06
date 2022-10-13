const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`#ingredients`);

const listElementToAdd = [];
ingredients.forEach( ingredient => {

const ingredientsEl = document.createElement('li');
ingredientsEl.textContent = ingredient;
ingredientsEl.classList.add('item');

listElementToAdd.push(ingredientsEl);

});
listEl.append(...listElementToAdd);
console.log(listElementToAdd);