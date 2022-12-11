import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery")
console.log(galleryContainer)

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
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
  instance.show()
}
}

const body = document.querySelector("body")
galleryContainer.addEventListener("keydown", evt => {
  console.log(evt)
  if(evt.code === "Escape") {
    console.log("Hello")
    const instance = basicLightbox.create(``)
    instance.close()
  }
})





  