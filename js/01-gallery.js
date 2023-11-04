import { galleryItems } from "./gallery-items.js";
// Change code below this line
//console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onGaleryImgLook);

function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
     <li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    
      `;
    })
    .join(" ");
}

const galleryCreator = createGallery(galleryItems);
galleryEl.innerHTML = galleryCreator;

function onGaleryImgLook(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgTarget = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imgTarget}">`,

    {
      onShow: () => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(e) {
    if (e.code !== "Escape") return;

    instance.close();
  }
}
console.log("hello");
