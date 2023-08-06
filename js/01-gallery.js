/** @format */

import {galleryItems} from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

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
                data-source="${original}"
                alt="${description}"
              />
            </a>
         </li>`
    )
    .join("");
}

galleryObj.insertAdjacentHTML("beforeend", galleryElements(galleryItems));

galleryObj.addEventListener("click", handleClickOpen);

function handleClickOpen(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();

  const element = event.target.closest(".gallery__image");
  const {source} = element.dataset;

  const instance = basicLightbox.create(`
      <img
      class="gallery__image"
      src="${source}" 
      alt="${element.alt}"      
    />
  `);

  instance.show();

  $basicLightbox__zIndex: 1000; // Stack order
  $basicLightbox__duration: 0.4; // Transition duration

  const keyClose = window.addEventListener("keydown", function escClose(event) {
    console.log(event);
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", escClose);
    }
  });
}
