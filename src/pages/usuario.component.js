import React, {useEffect} from 'react'; 

import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

// REDUX
import { connect } from 'react-redux';
import { obtenerUsuarios } from '../redux/actions/usuario.actions';
import { obtenerPaises } from '../redux/actions/territorio.actions';

//COMPONENTES
import ListaUsuarios from '../components/usuario/lista-usuarios.component';
import FormularioUsuario from '../components/usuario/formulario-usuario.component';
import VerUsuario from '../components/usuario/ver-usuario.component';
import { SyncLoader } from 'react-spinners';
 
const Usuario = ({usuarios, buscando, verFormulario, usuarioSeleccionado, obtenerUsuarios, obtenerPaises}) => {  
    useEffect(()=>{
        Moment.globalMoment = moment;
        Moment.globalLocale = 'es';
        obtenerUsuarios();
        obtenerPaises();
    },[])
     
    if (buscando) {
        return  <div className="text-center pt-5"> <SyncLoader /> </div>
    }

    if (usuarios.length === 0) {
        return  (
            <div className="container pt-5" >  
                <div className="row">  
                    <div className="col-6 offset-3"> 
                         <FormularioUsuario />  
                    </div>     
                </div> 
             
            </div>  
        )
    }else{
        if(usuarioSeleccionado.id === '' && !verFormulario){
            return  (
                <div className="container pt-5" >  
                    <div className="row">  
                        <div className="col-6 offset-3"> 
                             <ListaUsuarios 
                              usuarios={usuarios}
                            />  
                        </div>     
                    </div> 
                </div>  
            )
        }
    }
 
    return (        
        <div className="container pt-5" >  
            <div className="row">  
                <div className="col-6"> 
                    <ListaUsuarios
                        usuarios={usuarios}  
                    />  
                </div>  
                <div className="col-6"> 
                    { verFormulario ? <FormularioUsuario /> : (usuarioSeleccionado.id !== '') ? <VerUsuario /> : "" }
                </div>     
            </div>  
        </div>  
    )
}
 
const mapStateToProps = (state) => {
    const { usuarios, buscando, verFormulario, usuarioSeleccionado } = state.usuario;    

    return { 
        usuarios,           
        buscando,
        verFormulario,
        usuarioSeleccionado
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
        obtenerUsuarios: () => obtenerUsuarios(dispatch),
        obtenerPaises: () => obtenerPaises(dispatch)
    }
}


Usuario.displayName = 'Usuario';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario);
