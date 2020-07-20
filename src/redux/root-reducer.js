import { combineReducers } from 'redux';  
import  usuario from './reducers/usuario.reducer';
import territorio from './reducers/territorio.reducer';

const rootReducer = combineReducers({  
    usuario,
    territorio
});

export default rootReducer;
