let inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const idBoxesRef = document.querySelector('#boxes');
const smallBox = document.querySelector('.small-box');


const createBoxes = () => {
  for (let index = 0; index < inputRef.value; index += 1) {

    let box = document.createElement('div');

    box.style.width = String(30 + 10 * index) + 'px';
    box.style.height = String(30 + 10 * index) + 'px';
    box.style.backgroundColor = getRandomHexColor();

    idBoxesRef.style.display = "flex";
    idBoxesRef.style.justifyContent = "space-around";

    idBoxesRef.insertAdjacentElement("beforeend", box);
  }

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function destoryBox() {
  idBoxesRef.innerHTML = '';
  inputRef.value = '';
}



btnCreateRef.addEventListener('click', createBoxes)
btnDestroyRef.addEventListener('click', destoryBox)


