import TerritorioTypes from '../types/territorio.types';
import axios from 'axios';
import { urlPaises, cabeceraTerritorio, urlRegiones } from '../../constants';

export const obtenerPaises  = (dispatch) => {  
    dispatch({  type: TerritorioTypes.LOADING_PAISES });

    axios.get(urlPaises(), cabeceraTerritorio())
        .then(res => {  
            dispatch({
                type: TerritorioTypes.OBTENER_PAISES,
                payload: res.data.results
            })
        })
        .catch( error => { 
            console.log(error.message);
            dispatch({ 
                type: TerritorioTypes.ERROR_TERRITORIO,
                payload: error.message  
            });
    }); 
}
 
export const obtenerRegiones  = (dispatch, countryCode) => {  
    dispatch({  type: TerritorioTypes.LOADING_REGIONES });

    axios.get(urlRegiones(countryCode), cabeceraTerritorio())
        .then(res => {  
            dispatch({
                type: TerritorioTypes.OBTENER_REGIONES,
                payload: res.data.results
            })
        })
        .catch( error => { 
            console.log(error.message);
            dispatch({ 
                type: TerritorioTypes.ERROR_TERRITORIO,
                payload: error.message  
            });
    }); 
}