import UsuarioTypes from '../types/usuario.types';
  
const usuarioInicial =  {
    id : '',
    nombre : '',
    apellido  : '',
    pais : '',
    ciudad : '',
    createdAt: '',
    updatedAt: ''
}

const initialState = {
    usuarios: [ ],
    usuarioSeleccionado: usuarioInicial,
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
          buscando: true
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
          usuarioSeleccionado: usuarioInicial,
          verFormulario:false,
        }
      
      case UsuarioTypes.CONFECCIONAR_USUARIO:  
        return {
          ...state,
          usuarioSeleccionado: usuarioInicial,
          verFormulario: true
        }
      case UsuarioTypes.AGREGAR_USUARIO:  
        return {
          ...state,
          usuarioSeleccionado: action.payload,
          verFormulario: false
        }
        
      default:
        return state
    }
  }
  
  export default usuario