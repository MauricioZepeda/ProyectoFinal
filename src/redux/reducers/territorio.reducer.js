import TerritorioTypes from '../types/territorio.types';
  
const initialState = {
    paises: [ ], 
    buscandoPaises: false, 
    error: '', 
  }
 
function territorio (state = initialState, action) {
    switch (action.type) { 

      case TerritorioTypes.OBTENER_PAISES:
        return {
          ...state,
          paises: action.payload.map(pais => ({ value: pais.code , label: `${pais.emoji}  ${pais.name}` }) ),
          buscandoPaises: false,
          error: ''
        }  

      case TerritorioTypes.LOADING_PAISES:
        return {
          ...state,
          buscandoPaises: true
        } 

      case TerritorioTypes.ERROR_TERRITORIO:
        return {
          ...state,
          error: action.payload 
        } 
      default:
        return state
    }
  }
  
  export default territorio