// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line


const ListGallery = document.querySelector('.gallery');
function createGalleryMarkUp(array) {
    return array.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
}
ListGallery.insertAdjacentHTML("beforeend", createGalleryMarkUp(galleryItems));
console.log(createGalleryMarkUp(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay:1000 });