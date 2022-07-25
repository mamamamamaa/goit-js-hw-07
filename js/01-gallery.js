import { galleryItems } from "./gallery-items.js";
// Change code below this line

const boxRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const box = `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;

  boxRef.innerHTML += box;
});

boxRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className !== "gallery__image") {
    return;
  }
  const instance = createBox(e);
  instance.show();

  if (basicLightbox.visible()) {
    escClose(instance);
  }
});

function createBox(event) {
  return basicLightbox.create(`
  <div class="modal">
    <img
    src="${event.target.dataset.source}"
    alt="${event.target.alt}"
    />
  </div>
  `);
}

function escClose(instance) {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
