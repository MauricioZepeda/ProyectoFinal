 // USUARIO API
const base_url = 'http://ec2-18-191-56-204.us-east-2.compute.amazonaws.com:1337';
const end_point_usuario = 'usuario';
//------------------------------------------
//   WEATHER API
const weather_url = 'http://api.openweathermap.org/data/2.5/weather?';
const api_key_weather = 'c272d7c335cc451f9e90d12485a42f0b';
const idioma = '&lang=es';
//------------------------------------------
//   BANDERAS
const banderas_url = 'https://restcountries.eu/rest/v2/all';
//------------------------------------------
//   TERRITORIO API
// API KEYS
const application_key_territorio = 'MTeT7dLwsT9yRwPRdq0fubJbVasA1nv19uRCPhjx';
const api_key_territorio = 'tF8XKcmiObqt786kulXkpBpOuyDUUeU9x0Mg7dlR';
// Base url
const base_territorio_url = 'https://parseapi.back4app.com/classes/Continentscountriescities_'; 
const cantidad_registros = '?limit=300';
const condicion = '&where=';
 
// Paises
const end_point_paises = 'Country';
const orden_paises = '&order=name';

// Regiones
const end_point_regiones = 'Subdivisions_States_Provinces';
const orden_regiones = '&order=Subdivision_Name';
  
//------------------------------------------

export const cabeceraTerritorio = () => ({ headers: {'X-Parse-Application-Id': application_key_territorio, 'X-Parse-REST-API-Key': api_key_territorio }});
export const urlUsuario = (id='') => `${ base_url }/${ end_point_usuario }/${id}`; 
export const urlBanderas = () => `${ banderas_url }`;  
export const urlClima = (latitud, longitud) => `${ weather_url }lat=${latitud}&lon=${longitud}${idioma}&appid=${api_key_weather}`;  
export const urlPaises = () => `${ base_territorio_url }${end_point_paises}${ cantidad_registros }${orden_paises}`;
export const urlRegiones = (countryCode) => (`${ base_territorio_url }${end_point_regiones}${ cantidad_registros }${orden_regiones}${condicion}${ JSON.stringify({ "Country_Code": countryCode })}`);