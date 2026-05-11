'use strict';

const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const statusText = document.querySelector('#status p');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    statusText.textContent = '都市名を入力してください';
    return;
  }

  try {
    statusText.textContent = `${city}の天気を取得中...`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    const response = await fetch(url);

  if (!response.ok) {
    throw new Error('都市が見つかりません');
  }

    const data = await response.json();
  } catch (error) {
    statusText.textContent = error.message;
  }
});