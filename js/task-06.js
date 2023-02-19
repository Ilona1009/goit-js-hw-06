// const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener('blur', focusInput);


// function focusInput (event){

//     const dataLenght = inputRef.getAttribute('data-length');

//     console.log(event.target.value.length);


//     if(Number(dataLenght)===(event.target.value.length)){
//         inputRef.classList.remove('invalid')
//         inputRef.classList.add('valid')
//     } else{
//         inputRef.classList.remove('valid')
//         inputRef.classList.add('invalid')
//     }

// }


const textInputRef = document.querySelector('#validation-input');

textInputRef.addEventListener('blur', focusInput)

function focusInput(event) {
    
    const dataLenght = textInputRef.getAttribute('data-length')
    if (Number(dataLenght) === (event.target.value.length)) {
        textInputRef.classList.add('valid');
    } else {
        textInputRef.classList.add('invalid')
    }

    console.log(event.target.value.length)
}

// console.log(textInputRef)

