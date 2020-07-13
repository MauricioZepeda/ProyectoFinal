import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { seleccionaUsuario } from '../../redux/actions/usuario.actions';

const Usuario = ({ usuario, seleccionaUsuario }) => {
    return (  
        <li className="list-group-item" onClick={ () => seleccionaUsuario(usuario) } >{usuario.name}</li>
    );
}
   
const mapStateToProps = (state) => {
    return { 
   
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
        seleccionaUsuario: (usuario) => seleccionaUsuario(dispatch, usuario)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario)