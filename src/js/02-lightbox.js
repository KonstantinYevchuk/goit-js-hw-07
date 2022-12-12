import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery")

const array = galleryItems.reduce(
    (acc, {preview, original, description}) => {
       return acc + 
       `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
     </a>`
    }, '');

   
galleryContainer.insertAdjacentHTML('beforeend', array)
var lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionPosotion: 'bottom',
  captionDaley: 250
});
// galleryContainer.addEventListener("click", onClick);
// function onClick(evt) {
    
//     evt.preventDefault()
//     if(!evt.target.classList.contains("gallery__image")) {
//       return
//     } else {
//         var lightbox = new SimpleLightbox('.gallery a', { 
//             captionsData: "alt",
//             captionPosotion: 'bottom',
//             captionDaley: 250
//          });
// }
// }