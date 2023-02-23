let inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const idBoxesRef = document.querySelector('#boxes');
const smallBox = document.querySelector('.small-box');




const createBoxes = amount => {
  inputRef.value === amount.currentTarget.value;
    console.log(typeof inputRef.value )
    for (let index = 1; index <= inputRef.value ; index += 1) {
    
    const box = document.createElement('div');
        box.style.width = '30px';
        box.style.height = '30px';
        box.style.backgroundColor = getRandomHexColor();
    
    idBoxesRef.style.display = "flex";
    idBoxesRef.style.justifyContent = "space-around";

    idBoxesRef.insertAdjacentElement("beforeend", box);
    }
  }

  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreateRef.addEventListener('click', createBoxes)

  // inputRef.addEventListener('click', createBoxes)

