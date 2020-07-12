import { OBTENER_USUARIOS, AGREGAR_USAURIO, ACTUALIZAR_USAURIO, ELIMINAR_USUARIO, CARGANDO_USUARIOS } from '../types/usuario.types';
import axios from 'axios';

export const obtenerUsuarios  = (dispatch) => {  
  dispatch({  type: CARGANDO_USUARIOS })

  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {  
      dispatch({
          type: OBTENER_USUARIOS,
          payload: res.data  
      })
    })  
}


 