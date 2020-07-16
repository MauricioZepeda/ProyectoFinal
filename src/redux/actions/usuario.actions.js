import UsuarioTypes from '../types/usuario.types';
import axios from 'axios';
import { urlUsuario, urlActualizarUsuario } from '../../constants';

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

export const seleccionaUsuario  = (dispatch, usuario) => {  
  dispatch({  
    type: UsuarioTypes.SELECCIONA_USUARIO ,
    payload: {
      usuario  
    }
  }) 
}

export const crearUsuario  = (dispatch, usuario) => {   
   
  axios.post(urlUsuario(),
  {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    pais: usuario.pais,
    ciudad: usuario.ciudad
  })
    .then(res => {  
      dispatch({
          type: UsuarioTypes.AGREGAR_USAURIO,
          payload: usuario 
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


export const actualizarUsuario  = (dispatch, usuario) => {    
  axios.post(urlActualizarUsuario(),
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
          payload: usuario 
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

 