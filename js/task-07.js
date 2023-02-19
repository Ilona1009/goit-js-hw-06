// const inputRef = document.querySelector('#font-size-control');

// const inputTextRef = document.querySelector('#text');

// inputRef.addEventListener('input', ( )=>{
//     inputTextRef.style.fontSize = event.currentTarget.value + `px`
// })

const fontSizeControlRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

 fontSizeControlRef.addEventListener( 'input', moveTheSlider);

function moveTheSlider(event) {
  spanRef.style.fontSize = event.target.value + 'px'
}

