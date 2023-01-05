import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkUp = document.querySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, original, description }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`)
    .join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

galleryMarkUp.addEventListener('click', onImgClick);

function onImgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,

        {   onShow: () => document.addEventListener('keydown', onEscKeyPress),
            onClose: () => document.removeEventListener('keydown', onEscKeyPress),
        }
    );
    
    modal.show();

    function onEscKeyPress(e) {   
        if (e.code === "Escape") {
            modal.close();
        }
    }
}

console.log(galleryItems);