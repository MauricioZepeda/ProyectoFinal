import ClimaTypes from '../types/clima.types';
  
const initialState = {
    ciudad:'',
    condicion:'', 
    pronostico:'',
    viento:'',
    codigo:'',  
    buscandoClima: false, 
    error: '', 
  }
  
function clima (state = initialState, action) {
    switch (action.type) {  
      case ClimaTypes.OBTENER_CLIMA:
        const {name, sys , weather, wind } = action.payload;
        const { description, main } = weather[0];
        const { speed } = wind; 
        
        return {
          ...state, 
          ciudad: name,
          condicion : main, 
          pronostico : description, 
          viento : speed, 
          codigo : sys.country,   
          buscandoClima: false,
          error: ''
        }  

      case ClimaTypes.LOADING_CLIMA:
        return {
          ...state,
          buscandoClima: true
        } 

      case ClimaTypes.ERROR_CLIMA:
        return {
          ...state,
          error: action.payload 
        } 
      default:
        return state
    }
  }
  
  export default clima