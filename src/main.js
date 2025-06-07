import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import { loadImages } from './js/pixabay-api';
import {
  addLoader,
  destroyGallery,
  removeLoader,
  renderGallery,
} from './js/render-functions';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const searchValue = form.search.value;
  if (!searchValue.trim()) return;

  destroyGallery();
  addLoader();

  loadImages(searchValue)
    .then(res => {
      const images = res.hits;

      if (!images.length)
        return iziToast.error({
          progressBar: false,
          position: 'topRight',
          animateInside: false,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

      removeLoader();
      renderGallery(images);
    })
    .catch(err => {
      iziToast.error({
        progressBar: false,
        position: 'topRight',
        animateInside: false,
        message: err,
      });
    });
});
