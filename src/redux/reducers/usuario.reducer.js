import UsuarioTypes from '../types/usuario.types';
  
const initialState = {
    usuarios: [ ],
    usuarioSeleccionado: {  },
    buscando: false,
    error: ''
  }
 
function usuario (state = initialState, action) {
    switch (action.type) { 
      case UsuarioTypes.OBTENER_USUARIOS:
        return {
          ...state,
          usuarios: action.payload,
          buscando: false,
          error: ''
        }  

      case UsuarioTypes.LOADING_USUARIOS:
        return {
          ...state,
          buscando: true,
          usuarioSeleccionado: { }
        }

      case UsuarioTypes.SELECCIONA_USUARIO: 
        return {
          ...state,
          usuarioSeleccionado: action.payload 
        }

      case UsuarioTypes.ERROR_USUARIO:
        return {
          ...state,
          error: action.payload 
        }

        case UsuarioTypes.ACTUALIZAR_USUARIO:
          return {
            ...state,
            usuarioSeleccionado: action.payload 
          }
      default:
        return state
    }
  }
  
  export default usuario