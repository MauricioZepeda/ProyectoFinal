import React from 'react'; 
import Moment from 'react-moment';

// REDUX
import { connect } from 'react-redux';
import { seleccionarUsuario } from '../../redux/actions/usuario.actions';

const Usuario = ({ usuario, usuarioSeleccionado, seleccionarUsuario }) => {  
    const activo = (usuarioSeleccionado.id === usuario.id) ? " active" : "" ;
    const fechaCreacion = usuario.createdAt;
    const fechaModificacion = usuario.updatedAt;
    
    return (  
        <a href="#!" 
            onClick={ () => seleccionarUsuario(usuario) }
            className={ `list-group-item list-group-item-action flex-column align-items-start ${activo}` }
        > 
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <h4>{usuario.nombre} {usuario.apellido}</h4> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7 pt-2">
                            <h5>{usuario.ciudad}</h5>
                        </div>
                        <div className="col-5 d-flex flex-column">
                            <small><label className="text-success">Creado </label> <Moment date={fechaCreacion} format="DD/MM/YYYY" /></small>
                            { (fechaCreacion !== fechaModificacion) && <small><label className="text-danger pr-1">Editado </label><Moment date={fechaModificacion} format="DD/MM/YYYY" /></small>}
                        </div>
                    </div>
                </div>
            </div> 
        </a>  
    );
}
   
const mapStateToProps = (state) => {
    return { 
        usuarioSeleccionado : state.usuario.usuarioSeleccionado
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
        seleccionarUsuario: (usuario) => seleccionarUsuario(dispatch, usuario)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario)