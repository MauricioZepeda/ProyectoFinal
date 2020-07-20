import React, {useEffect} from 'react'; 

import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

// REDUX
import { connect } from 'react-redux';
import { obtenerUsuarios } from '../redux/actions/usuario.actions';
import { obtenerPaises } from '../redux/actions/territorio.actions';
import { obtenerBanderas } from '../redux/actions/banderas.actions';

//COMPONENTES
import ListaUsuarios from '../components/usuario/lista-usuarios.component';
import FormularioUsuario from '../components/usuario/formulario-usuario.component';
import VerUsuario from '../components/usuario/ver-usuario.component';
import { SyncLoader } from 'react-spinners';
 
const Usuario = ({usuarios, buscandoUsuarios, buscandoBanderas, buscandoPaises, verFormulario, usuarioSeleccionado, obtenerUsuarios, obtenerPaises, obtenerBanderas}) => {  
    useEffect(()=>{
        Moment.globalMoment = moment;
        Moment.globalLocale = 'es';
        obtenerUsuarios();
        obtenerPaises();
        obtenerBanderas();
    },[])
     
    if (buscandoUsuarios || buscandoBanderas || buscandoPaises) {
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
    const { usuarios, buscandoUsuarios, verFormulario, usuarioSeleccionado } = state.usuario;    
    const { buscandoPaises } = state.territorio;    
    const {  buscandoBanderas } = state.banderas;    

    return { 
        usuarios,       
        buscandoUsuarios,   
        buscandoBanderas,
        buscandoPaises,
        verFormulario,
        usuarioSeleccionado
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
        obtenerUsuarios: () => obtenerUsuarios(dispatch),
        obtenerPaises: () => obtenerPaises(dispatch),
        obtenerBanderas: () => obtenerBanderas(dispatch)
    }
}


Usuario.displayName = 'Usuario';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario);
