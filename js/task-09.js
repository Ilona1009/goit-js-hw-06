// const btnRef = document.querySelector('.change-color');
// const spanRef = document.querySelector('.color');
// const bodyRef = document.body;

// btnRef.addEventListener('click', clickBtn)

// function clickBtn (event){

// const NewColor = getRandomHexColor();
// bodyRef.style.background = NewColor;
// spanRef.textContent = NewColor;


// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('button');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', newColorRef);


function newColorRef() {
    bodyRef.style.backgroundColor = getRandomHexColor();
    colorRef.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

