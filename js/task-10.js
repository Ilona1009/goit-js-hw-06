let inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const idBoxesRef = document.querySelector('#boxes');
const smallBox = document.querySelector('.small-box');




    let www = 30 + 'px';
    let hhh = 30 + 'px';

const createBoxes = amount => {
  inputRef.value === amount.currentTarget.value;
  for (let index = 1; index <= inputRef.value; index += 1) {

    let box = document.createElement('div');

    box.classList.add('small-box');
    box.style.width = www;
    box.style.height = hhh;
    box.style.backgroundColor = getRandomHexColor();

    idBoxesRef.style.display = "flex";
    idBoxesRef.style.justifyContent = "space-around";

    idBoxesRef.insertAdjacentElement("beforeend", box);
  }

      function f() {
      return Array.from(arguments)
    }

console.log(f(amount))
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function destoryBox() {
  idBoxesRef.innerHTML = '';
}



btnCreateRef.addEventListener('click', createBoxes)
btnDestroyRef.addEventListener('click', destoryBox)


