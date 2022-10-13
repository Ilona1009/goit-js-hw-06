const inputRef = document.querySelector('#font-size-control');

const inputTextRef = document.querySelector('#text');

inputRef.addEventListener('input', ( )=>{
    inputTextRef.style.fontSize = event.currentTarget.value + `px`
}) 