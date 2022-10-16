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

galleryContainer.innerHTML = cardsMarkup;

galleryContainer.addEventListener('click', onPictureClick);

function onPictureClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image'))
        return;
  
  const modalWindow = basicLightbox.create(`
<img src="${evt.target.dataset.source}">`);
  
  modalWindow.show();
  
  galleryContainer.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modalWindow.close()
    }
  })
}
