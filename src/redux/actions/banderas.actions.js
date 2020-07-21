import BanderasTypes from '../types/banderas.types';
import axios from 'axios';
import { urlBanderas } from '../../constants';


export const obtenerBanderas  = (dispatch) => {  
    dispatch({  type: BanderasTypes.LOADING_BANDERAS });
    
    axios.get(urlBanderas())
        .then(res => {  
            dispatch({
                type: BanderasTypes.OBTENER_BANDERAS,
                payload: res.data
            })
        })
        .catch( error => {  
            dispatch({ 
                type: BanderasTypes.ERROR_BANDERAS,
                payload: error.message  
            });
    }); 
}