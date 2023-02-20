const inputRef = document.querySelector('[number]');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const idBoxesRef = document.querySelector('#boxes');

function createBoxes(inputRef) {
  for (let index = 0; index < inputRef; index += 1) {
    console.log('gg')

    const box = document.createElement('div');
  }
}

btnCreateRef.addEventListener('submit', createBoxes(inputRef));


// console.log(createBoxes(90))
console.log(inputRef)


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

