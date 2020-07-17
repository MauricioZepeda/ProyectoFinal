import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { editarUsuario, eliminarUsuario } from '../../redux/actions/usuario.actions';

const VerUsuario = ({usuarioSeleccionado, editarUsuario, eliminarUsuario}) => { 
    return (   
        <div className="container"> 
            <div className="row mt-5 pb-3">
                <div className="col-10">
                    <h1><i class="fas fa-user"></i> Datos de {usuarioSeleccionado.nombre }</h1>        
                </div>
                <div className="col-1 pt-1">
                    <button className="btn btn-info shadow mr-2" onClick={()=> editarUsuario(usuarioSeleccionado) }><i className="far fa-edit fa-md"></i> </button>
                </div>
                <div className="col-1 pt-1">
                    <button className="btn btn-danger shadow ml-2" onClick={()=> eliminarUsuario(usuarioSeleccionado.id) }><i className="far fa-trash-alt fa-md"></i> </button>
                </div>
            </div>

            <div className="list-group"> 
                <h2> { usuarioSeleccionado.nombre }</h2> 
                <h2> { usuarioSeleccionado.apellido }</h2>
            </div> 
        </div> 
    );
}
 

const mapStateToProps = (state) => {
    return { 
        usuarioSeleccionado : state.usuario.usuarioSeleccionado
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        editarUsuario: (usuario) => editarUsuario(dispatch, usuario),
        eliminarUsuario: (usuario) => eliminarUsuario(dispatch, usuario)
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerUsuario)  