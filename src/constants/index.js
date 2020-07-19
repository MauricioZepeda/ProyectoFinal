const api_key_weather = 'c272d7c335cc451f9e90d12485a42f0b';
const weather_url = 'http://api.openweathermap.org/data/2.5/weather?q=';

const base_url = 'http://localhost:1337';
const usuario = 'usuario';

export const urlUsuario = (id='') => `${ base_url }/${ usuario }/${id}`;   
export const urlWeather = (ciudad = 'london') => `${ weather_url }=${ciudad}&appid=${api_key_weather}`;  