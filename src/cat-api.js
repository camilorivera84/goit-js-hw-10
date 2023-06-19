/*const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = 'DEMO_API_KEY';
let storedBreeds = [];

fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    //filter to only include those with an `image` object
    data = data.filter(img => img.image?.url != null);

    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      //skip any breeds that don't have an image
      if (!breed.image) continue;

      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.getElementById('breed_select').appendChild(option);
    }
    //show the first breed by default
    showBreedImage(0);
  })
  .catch(function (error) {
    console.log(error);
  });

function showBreedImage(index) {
  document.getElementById('breed_image').src = storedBreeds[index].image.url;

  document.getElementById('breed_json').textContent =
    storedBreeds[index].temperament;

  document.getElementById('wiki_link').href = storedBreeds[index].wikipedia_url;
  document.getElementById('wiki_link').innerHTML =
    storedBreeds[index].wikipedia_url;
}*/
// Función para hacer una petición HTTP a la colección de razas
const apiKey =
  'live_NgM5732M1DdT2hKPvftcsLGiaon7mx6pVV9RWVspQOc1Xx45Jmu9wd58sURDU31D';
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search/?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}
