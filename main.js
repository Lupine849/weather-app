'use strict';

const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
});