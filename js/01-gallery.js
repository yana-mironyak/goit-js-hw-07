import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onClick);

function createListItemsMurkUp() {

    return galleryItems.map(item =>
        `<div class = "gallery__item"><a href = ${item.original} class = "gallery__link"><img class = "gallery__image" src = ${item.preview} data-source = ${item.original} alt = ${item.description}</a></div>`).join('');
}

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(`<img src = '${evt.target.dataset.source}' width="800" height="600">`);
    
        instance.show();      

        window.addEventListener('keydown', onEscKeyPress);

        function onEscKeyPress(evt) {
            if (evt.code === "Escape") {
                
                instance.close();
            }             
        }
    }
}

const listItems = createListItemsMurkUp();

galleryRef.innerHTML = listItems;


 

