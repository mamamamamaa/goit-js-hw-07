import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  ulRef.innerHTML += `<li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
});

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: "250",
});

console.log(galleryItems);
