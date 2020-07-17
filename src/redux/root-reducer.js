import { combineReducers } from 'redux';  
import  usuario from './reducers/usuario.reducer'

const rootReducer = combineReducers({  
    usuario
});

export default rootReducer;
