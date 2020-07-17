import UsuarioTypes from '../types/usuario.types';
  
const initialState = {
    usuarios: [ ],
    usuarioSeleccionado: {  },
    buscando: false,
    verFormulario: false,
    error: '', 
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
          usuarioSeleccionado: action.payload,
          verFormulario: false
        }

      case UsuarioTypes.EDITAR_USUARIO: 
        return {
          ...state, 
          verFormulario: true
        }

      case UsuarioTypes.ERROR_USUARIO:
        return {
          ...state,
          error: action.payload 
        }

      case UsuarioTypes.ACTUALIZAR_USUARIO:
        return {
          ...state,
          verFormulario:false,
          usuarioSeleccionado: action.payload
        }

      case UsuarioTypes.ELIMINAR_USUARIO:
        return {
          ...state,
          usuarios: state.usuarios.filter(usuario => usuario.id !== action.payload),
          usuarioSeleccionado: {},
          verFormulario:false,
        }
      
      case UsuarioTypes.CONFECCIONAR_USUARIO:  
        return {
          ...state,
          usuarioSeleccionado: {},
          verFormulario: true
        }
      default:
        return state
    }
  }
  
  export default usuario