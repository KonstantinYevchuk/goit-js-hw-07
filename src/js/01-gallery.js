import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery")
console.log(galleryContainer)
let instance;
// const markup = galleryArray(galleryItems)        
// galleryContainer.insertAdjacentHTML('beforeend', markup)

// function galleryArray(items) {
//   const array = items.reduce(
//     (acc, {preview, original, description}) => {
//        return acc + 
//        `<div class="gallery__item">
//        <a class="gallery__link" href="${original}">
//          <img
//            class="gallery__image"
//            src="${preview}"
//            data-source="${original}"
//            alt="${description}"
//          />
//        </a>
//      </div>`
//     }, '');
//     return array
// }
 
const array = galleryItems.reduce(
      (acc, {preview, original, description}) => {
         return acc + 
         `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </div>`
      }, '');
  galleryContainer.insertAdjacentHTML('beforeend', array)

galleryContainer.addEventListener("click", onClick);
// const link = document.querySelectorAll(".gallery__link")
const image = document.querySelectorAll(".gallery__image")

function onClick(evt) {
    
    evt.preventDefault()
    if(!evt.target.classList.contains("gallery__image")) {
      return
    } else {
    instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="${this.description}" width="800" height="600">
`)
  instance.show()
  document.addEventListener("keydown", keyDown)
}

}
function keyDown(evt) {
  if(!evt.code === "Escape") {
    return
}
instance.close()
document.removeEventListener("keydown", keyDown)
}






  