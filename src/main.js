import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 200 });

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  // Перевірка на порожній рядок
  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  // Показуємо індикатор завантаження
  loader.style.display = "block";
  gallery.innerHTML = "";

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.warning({
        title: "No results",
        message: "Sorry, no images found. Please try another search.",
        position: "topLeft",
      });
    } else {
      renderGallery(images);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: error.message,
      position: "topRight",
    });
  } finally {
    loader.style.display = "none";
    form.reset();
  }
});