import ClimaTypes from '../types/clima.types';
import axios from 'axios';
import { urlClima } from '../../constants';


export const obtenerClimaActual  = (dispatch, latitud, longitud) => {  
    dispatch({  type: ClimaTypes.LOADING_CLIMA });
     
    axios.get(urlClima(latitud, longitud))
        .then(res => {  
            dispatch({
                type: ClimaTypes.OBTENER_CLIMA,
                payload: res.data
            })
        })
        .catch( error => {  
            dispatch({ 
                type: ClimaTypes.ERROR_CLIMA,
                payload: error.message  
            });
    }); 
}