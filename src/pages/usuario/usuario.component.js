import React, {useEffect} from 'react';

// REDUX
import { connect } from 'react-redux';
import { obtenerUsuarios } from '../../redux/actions/usuario.actions';

//COMPONENTES
import ListaUsuarios from '../../components/usuario/lista-usuarios.component';
import NuevoUsuario from '../../components/usuario/nuevo-usuario.component';
import { SyncLoader } from 'react-spinners';

const Usuario = ({usuarios, buscando, obtenerUsuarios}) => {  
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
                    <NuevoUsuario />  
                </div>      
                <div className="col-6"> 
                    <ListaUsuarios 
                        usuarios={usuarios}  
                    />  
                </div>  
            </div> 
        </section>  
    )
}
 
const mapStateToProps = (state) => {
    return { 
        usuarios: state.usuario.usuarios,           
        buscando: state.usuario.buscando
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
