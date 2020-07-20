import { combineReducers } from 'redux';  
import usuario from './reducers/usuario.reducer';
import territorio from './reducers/territorio.reducer';
import banderas from './reducers/banderas.reducer';

const rootReducer = combineReducers({  
    usuario,
    territorio,
    banderas
});

export default rootReducer;
