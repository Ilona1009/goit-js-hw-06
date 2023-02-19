// let formInput = document.querySelector('#name-input');
// let formOutput = document.querySelector('#name-output');

// formInput.addEventListener('input', onFormInput);

// function onFormInput(event) {
//     console.log(event.target.value);
//     if (event.target.value === '') {
//         formOutput.textContent = 'Anonymous';
//     } else {
//         formOutput.textContent = event.target.value;
//     }};


let inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');
// console.log(outputRef)

inputRef.addEventListener('input', enterTheText);

function enterTheText(event) {
    event.preventDefault();


    outputRef.textContent = event.currentTarget.value;
}
