import { OBTENER_USUARIOS, AGREGAR_USAURIO, ACTUALIZAR_USAURIO, ELIMINAR_USUARIO, LOADING_USUARIOS, SELECCIONA_USUARIO } from '../types/usuario.types';

const initialState = {
    usuarios: [ ],
    usuarioSeleccionado: {},
    buscando: false
  }
 
function usuario (state = initialState, action) {
    switch (action.type
      ) { 
      case OBTENER_USUARIOS:
        return {
          ...state,
          usuarios: action.payload,
          buscando: false
        }  
        case LOADING_USUARIOS:
          return {
            ...state,
            buscando: true,
            usuarioSeleccionado: {}
          }
        case SELECCIONA_USUARIO:
          return {
            ...state,
            usuarioSeleccionado: action.payload 
          }
      default:
        return state
    }
  }
  
  export default usuario