import { combineReducers } from 'redux';  
import usuario from './reducers/usuario.reducer';
import territorio from './reducers/territorio.reducer';
import banderas from './reducers/banderas.reducer';
import clima from './reducers/clima.reducer';

const rootReducer = combineReducers({  
    usuario,
    territorio,
    banderas,
    clima
});

export default rootReducer;
