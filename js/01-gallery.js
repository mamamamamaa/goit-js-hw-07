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
});

function addEscListener(instance) {
  const closure = conditions(instance);
  window.addEventListener("keydown", closure);
}

function removeEscListener(instance) {
  const closure = conditions(instance);
  window.removeEventListener("keydown", closure);
}

function conditions(instance) {
  return function (e) {
    if (e.key === "Escape") {
      instance.close();
    }
  };
}

function createBox(event) {
  return basicLightbox.create(
    `
  <div class="modal">
    <img
    src="${event.target.dataset.source}"
    alt="${event.target.alt}"
    />
  </div>
  `,
    {
      onShow: addEscListener,
      onClose: removeEscListener,
    }
  );
}

console.log(galleryItems);
