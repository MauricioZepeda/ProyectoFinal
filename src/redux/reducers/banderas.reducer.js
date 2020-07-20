import BanderasTypes from '../types/banderas.types';
  
const initialState = {
    listaBanderas: [ ], 
    buscandoBanderas: false, 
    error: '', 
  }
 
function banderas (state = initialState, action) {
    switch (action.type) { 

      case BanderasTypes.OBTENER_BANDERAS:
        return {
          ...state,
          listaBanderas: action.payload.map(pais => ({ code: pais.alpha2Code , flag: pais.flag, nombre: pais.name }) ),
          buscandoBanderas: false,
          error: ''
        }  

      case BanderasTypes.LOADING_BANDERAS:
        return {
          ...state,
          buscandoBanderas: true
        } 

      case BanderasTypes.ERROR_BANDERAS:
        return {
          ...state,
          error: action.payload 
        } 
      default:
        return state
    }
  }
  
  export default banderas