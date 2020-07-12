import { OBTENER_USUARIOS, AGREGAR_USAURIO, ACTUALIZAR_USAURIO, ELIMINAR_USUARIO, CARGANDO_USUARIOS } from '../types/usuario.types';

const initialState = {
    usuarios: [ ],
    buscando: false
  }
 
function usuario (state = initialState, action) {
    switch (action.type) { 
      case OBTENER_USUARIOS:
        return {
          ...state,
          usuarios: action.payload,
          buscando: false
        }  
      case CARGANDO_USUARIOS:
        return {
          ...state,
          buscando: true 
        }
      default:
        return state
    }
  }
  
  export default usuario