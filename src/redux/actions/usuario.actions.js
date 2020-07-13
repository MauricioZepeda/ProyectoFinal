import { OBTENER_USUARIOS, AGREGAR_USAURIO, ACTUALIZAR_USAURIO, ELIMINAR_USUARIO, LOADING_USUARIOS, SELECCIONA_USUARIO } from '../types/usuario.types';
import axios from 'axios';

export const obtenerUsuarios  = (dispatch) => {  
  dispatch({  type: LOADING_USUARIOS })

  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {  
      dispatch({
          type: OBTENER_USUARIOS,
          payload: res.data  
      })
    })  
}

export const seleccionaUsuario  = (dispatch, usuario) => {  
  dispatch({  
    type: SELECCIONA_USUARIO ,
    payload: {
      usuario  
    }
  }) 
}

 