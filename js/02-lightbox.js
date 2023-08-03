/** @format */

import {galleryItems} from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryObj = document.querySelector(".gallery");

function galleryElements(arr) {
  return arr
    .map(
      ({preview, original, description}) =>
        // `<li class="gallery__item">
        //     <a class="gallery__link" href="${original}">
        //       <img
        //         class="gallery__image"
        //         src="${preview}"
        //         data-source="${original}"
        //         alt="${description}"
        //       />
        //     </a>
        //  </li>`

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

galleryObj.addEventListener("click", handleClickOpen);

function handleClickOpen(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();

  // console.log(event);
  const element = event.target.closest(".gallery__link");
  console.log(element);

  // Начало изменений===================================================

  //   const {source} = element.dataset;

  //   const pictGallery = galleryItems.find(({original}) => source === original);
  // console.log(pictGallery);
}
