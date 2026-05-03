'use strict';

const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const statusText = document.querySelector('.status p');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    statusText.textContent = '都市名を入力してください';
    return;
  }

  statusText.textContent = `${city}の天気を取得中...`;
});