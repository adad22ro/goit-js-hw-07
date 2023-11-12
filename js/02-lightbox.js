import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("galleryitem");
  listItemEl.innerHTML = `<a class='gallerylink' href='${item.original}'>
        <img class='gallery__image'
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'/>
    </a>`;

  listEl.append(listItemEl);
});

listEl.addEventListener("click", openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {});
}
console.log(galleryItems);
