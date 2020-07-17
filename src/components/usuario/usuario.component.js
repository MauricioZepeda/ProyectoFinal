import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { seleccionarUsuario } from '../../redux/actions/usuario.actions';

const Usuario = ({ usuario, seleccionarUsuario }) => {
    return (  
        <li className="list-group-item" onClick={ () => seleccionarUsuario(usuario) } >{usuario.nombre} - {usuario.apellido}</li>
    );
}
   
const mapStateToProps = (state) => {
    return { 
   
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