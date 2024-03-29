const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const newUl = document.querySelector(".gallery");
// newUl.style.display = "flex";

// const allImages = images.map(image => {
//   const newLi = `<li>
//     <img src = ${image.url} alt = ${image.alt} width=630 height=375>
//   </li>`;
//   return newLi
// })

// newUl.insertAdjacentHTML("afterbegin", allImages.join(''));

// console.log(allImages);


const imagesRef = document.querySelector('.gallery');

const itemsEl = images.map((imag) => 
  `<li class="list-item"><img src =${imag.url} alt = ${imag.alt} width=630 height=375></li>`
)
imagesRef.style.display = "flex"

imagesRef.insertAdjacentHTML("beforeend", itemsEl.join(""));

console.log(itemsEl)
