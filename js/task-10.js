const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const idBoxesRef = document.querySelector('#boxes');


const createBoxes = amount => {
    const targetInput = amount .currentTarget.value;

  for (let index = 0; index < targetInput; index += 1) {
    idBoxesRef.insertAdjacentElement("beforeend", box)
;
  }
  
}

const box = document.createElement('div');
    box.setAttribute('id', 'boxes');
    // box.style.width = "30px"; 
    // box.style.hight = "30px";
    // box.style.backgroundColor = getRandomHexColor();


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

inputRef.addEventListener('input', createBoxes)


// console.log(box)