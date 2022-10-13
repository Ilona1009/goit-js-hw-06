const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(event){
event.preventDefault();


const formElements = event.currentTarget.elements;

console.dir(formElements)


const email = formElements.email.value;
const password = formElements.password.value;

const formData = {
    email,
    password,
}
console.log(formData);

formData.email !== "" && formData.password !== ""
   ? form.reset()
   : alert (`всі поля повинні бути заповнені`)

}
