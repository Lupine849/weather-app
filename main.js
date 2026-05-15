'use strict';

const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const statusText = document.querySelector('#status p');
const result = document.querySelector('#result');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const humidity = document.querySelector('.humidity');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    statusText.textContent = '都市名を入力してください';
    return;
  }

  result.classList.add('hidden');

  try {
    statusText.textContent = `${city}の天気を取得中...`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    const response = await fetch(url);

  if (!response.ok) {
    throw new Error('都市が見つかりません');
  }

    const data = await response.json();

    cityName.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)} ℃`;
    weather.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity} %`;

    result.classList.remove('hidden');

    statusText.textContent = '取得成功';

    cityInput.value = '';
  } catch (error) {
    statusText.textContent = error.message;
  }
});