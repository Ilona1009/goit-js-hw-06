const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.body;

btnRef.addEventListener('click', clickBtn)

function clickBtn (event){

const NewColor = getRandomHexColor();
bodyRef.style.background = NewColor;
spanRef.textContent = NewColor;


}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`}