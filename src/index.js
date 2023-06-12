import { fetchBreeds, fetchCatByBreeds } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', createMarkup);

selectEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    createOptions(data);
    selectEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
  })
  .catch(() => {
    loaderEl.classList.add('is-hidden');
    errorEl.classList.remove('is-hidden');
  });

function createOptions(cats) {
  const markup = cats
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  selectEl.innerHTML = markup;
}

function createMarkup(evt) {
  catInfoEl.innerHTML = '';
  fetchCatByBreed(evt.target.value);
  // .then(createCardCat)
  // .catch(() => error.classList.remove('is-hidden'))
  //.finally(() => loaderEl.classList.add('is-hidden'))
}

function createCardCat(cat) {
  const { description, name, temperament } = cat[0].breeds[0];
  const markup = `<img src="${cat[0].url}" alt=${name}" width="300px"/>`;
  /*<div class="wrapper">
    <h1>${name}</h1>
    <p>${description}</p>
    <p>
      <b>Temperament:</b>${temperament}
    </p>
  </div>;*/
  catInfoEl.innerHTML = markup;
}
