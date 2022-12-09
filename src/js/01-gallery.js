import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery")
console.log(galleryContainer)

        const murkup = galleryItems.reduce(
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
            
            galleryContainer.insertAdjacentHTML('beforeend', murkup) 
   
    
galleryContainer.addEventListener("click", onClick);
const link = document.querySelector(".gallery__link")
function onClick(evt) {
    console.log(evt.target);
    if(evt.target === link) {
        return
    } 
}



  