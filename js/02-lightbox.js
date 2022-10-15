import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

function createImagesMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `  
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
  }).join('');
}
var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
