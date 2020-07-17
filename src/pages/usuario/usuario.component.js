import React, {useEffect} from 'react';

// REDUX
import { connect } from 'react-redux';
import { obtenerUsuarios } from '../../redux/actions/usuario.actions';

//COMPONENTES
import ListaUsuarios from '../../components/usuario/lista-usuarios.component';
import FormularioUsuario from '../../components/usuario/formulario-usuario.component';
import VerUsuario from '../../components/usuario/ver-usuario.component';
import { SyncLoader } from 'react-spinners';

const Usuario = ({usuarios, buscando, verFormulario, usuarioSeleccionado, obtenerUsuarios}) => {  
    useEffect(()=>{
        obtenerUsuarios()
    },[])

    if (buscando) {
        return  <div className="text-center pt-5"> <SyncLoader /> </div>
    }
    
    return (        
        <section className="container">  
            <div className="d-flex justify-content-between"> 
                <div className="col-6"> 
                    <ListaUsuarios
                        usuarios={usuarios}  
                    />  
                </div>  
                <div className="col-6"> 
                { verFormulario ? <FormularioUsuario /> : usuarioSeleccionado.usuario ? <VerUsuario />: "" }
                </div>      
            </div> 
        </section>  
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
        obtenerUsuarios: ( ) => obtenerUsuarios(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario);
