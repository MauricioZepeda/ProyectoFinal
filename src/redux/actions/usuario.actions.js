import UsuarioTypes from '../types/usuario.types';
import axios from 'axios';
import { urlUsuario } from '../../constants';

export const obtenerUsuarios  = (dispatch) => {  
  dispatch({  type: UsuarioTypes.LOADING_USUARIOS })

  axios.get(urlUsuario())
    .then(res => {  
      dispatch({
          type: UsuarioTypes.OBTENER_USUARIOS,
          payload: res.data  
      })
    })
    .catch( error => { 
      dispatch({ 
          type: UsuarioTypes.ERROR_USUARIO,
          payload: error.message  
        });
    });
}

export const seleccionarUsuario  = (dispatch, usuario) => {    
  dispatch({  
    type: UsuarioTypes.SELECCIONA_USUARIO ,
    payload: usuario
  }) 
}

export const editarUsuario  = (dispatch) => {  
  dispatch({  
    type: UsuarioTypes.EDITAR_USUARIO 
  }) 
}

export const crearUsuario  = (dispatch, usuario) => {    
  axios.post(urlUsuario(),
  {
    id: usuario.id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    pais: usuario.pais,
    ciudad: usuario.ciudad
  })
    .then(res => {   
      dispatch({
          type: UsuarioTypes.AGREGAR_USUARIO,
          payload: res.data 
      }) 
      seleccionarUsuario(dispatch, res.data);
      obtenerUsuarios(dispatch);
    }) 
    .catch( error => { 
      dispatch({ 
          type: UsuarioTypes.ERROR_USUARIO,
          payload: error.message  
        });
    });
}

export const actualizarUsuario  = (dispatch, usuario) => {    
  axios.put(urlUsuario(usuario.id),
  {
    id: usuario.id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    pais: usuario.pais,
    ciudad: usuario.ciudad
  })
    .then(res => {  
      dispatch({
          type: UsuarioTypes.ACTUALIZAR_USUARIO,
          payload: res.data 
      }) 
      obtenerUsuarios(dispatch);
      seleccionarUsuario(dispatch, res.data);
    }) 
    .catch( error => { 
      dispatch({ 
          type: UsuarioTypes.ERROR_USUARIO,
          payload: error.message  
        });
    });
}

export const eliminarUsuario   = (dispatch, id) => {  
  axios.delete(urlUsuario(id))
    .then(res => {  
      dispatch({
          type: UsuarioTypes.ELIMINAR_USUARIO,
          payload: id
      }) 
      obtenerUsuarios(dispatch); 
    }) 
    .catch( error => { 
      dispatch({ 
          type: UsuarioTypes.ERROR_USUARIO,
          payload: error.message  
        });
    });
}

export const confeccionarUsuario  = (dispatch, usuario) => {  
  dispatch({  
    type: UsuarioTypes.CONFECCIONAR_USUARIO,
    payload: usuario
  }) 
}