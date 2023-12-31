/** @format */

import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryObj = document.querySelector(".gallery");

function galleryElements(arr) {
  return arr
    .map(
      ({preview, original, description}) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                   src="${preview}"
                    alt="${description}"
                />
            </a>
      </li>`
    )
    .join("");
}

galleryObj.insertAdjacentHTML("beforeend", galleryElements(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
