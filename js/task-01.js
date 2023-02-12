// const categories = document.querySelectorAll('.item');
// console.log(`Number of categories:${categories.length}`);


// categories.forEach((item)=>{
//     console.log(`Category:`, item.querySelector('h2').textContent);
//     console.log(`Elements:`, item.querySelectorAll('li').length)
// }
// )


const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length}`)

// const itemEl = document.querySelectorAll('h2')
categories.forEach(el => {
    console.log(`Category:`, el.querySelector('h2').textContent);
    console.log(`Elements:`, el.querySelectorAll('li').length);

})
