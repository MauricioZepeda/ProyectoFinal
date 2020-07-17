import React, {Fragment} from 'react';

// REDUX
import { connect } from 'react-redux';
import { editarUsuario, eliminarUsuario } from '../../redux/actions/usuario.actions';

const VerUsuario = ({usuarioSeleccionado, editarUsuario, eliminarUsuario}) => { 
    return ( 
        <Fragment>
            <h1>Ver usuario</h1>
            <h2> { usuarioSeleccionado.nombre }</h2> 
            <h2> { usuarioSeleccionado.apellido }</h2>

            <button className="btn btn-info mx-3" onClick={()=> editarUsuario(usuarioSeleccionado) }>Editar</button>
            <button className="btn btn-danger mx-3" onClick={()=> eliminarUsuario(usuarioSeleccionado.id) }>Eliminar</button>
       </Fragment>
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