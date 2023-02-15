

// const decrementRef = document.querySelector('button[data-action="decrement"]');
// const incrementRef = document.querySelector('button[data-action="increment"]');
// const valueRef = document.querySelector('#value');

// decrementRef.addEventListener('click',function() {
//     counterValue.decrement();
//     valueRef.textContent = counterValue.value;
// })

// incrementRef.addEventListener('click',function() {
//     counterValue.increment();
//     valueRef.textContent = counterValue.value;
// })


const counterValue = {
    value: 0,
    decrement () {
this.value += 1;
    },

    increment() {
        this.value -= 1;
}   
}

const btnDecrementRef = document.querySelector('button [data-action="decrement"]');
const btnIncrementRef = document.querySelector('button [data-action="increment"]');
const valueRef = document.querySelector('#value');


btnDecrementRef.addEventListener('click', function () {
    counterValue.decrement();
    valueRef.textContent = counterValue.value;
});



btnIncrementRef.addEventListener('click', function () {
    counterValue.increment();
        valueRef.textContent = counterValue.value
});


    


