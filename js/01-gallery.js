import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

function createImagesMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `  
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>
    `;
  }).join('');
}

let modalWindow;
galleryContainer.addEventListener('click', onPictureClick);

function onPictureClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    modalWindow = basicLightbox.create(`
<img src = "${event.target.dataset.source}">`);
    modalWindow.show(onPictureClick);
}
