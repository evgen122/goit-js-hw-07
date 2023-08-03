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
  // console.log(event);
  const element = event.target.closest(".gallery__image");
  console.log(element.dataset);
  const {source} = element.dataset;

  galleryItems.find(({original}) => source === original);
  const instance = basicLightbox.create(`
      <img
      class="gallery__image"
      src="${source}"       
    />
  `);
  instance.show();
}
