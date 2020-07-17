import React, {Fragment} from 'react';   
import Usuario from './usuario.component'; 
 
// REDUX
import { connect } from 'react-redux'; 
import { confeccionarUsuario } from '../../redux/actions/usuario.actions';

const ListaUsuarios = ({usuarios, confeccionarUsuario}) => { 
    return ( 
        <Fragment>
            <h1 className="pt-4">Usuarios registrados</h1>
            <button className="btn btn-success" onClick={confeccionarUsuario}>Crear usuario</button>

            <ul className="list-group">
             { usuarios.map(usr => <Usuario key={usr.id} usuario={usr} />)}
            </ul>
        </Fragment> 
    );
} 
   
const mapStateToProps = (state) => {
    return { 
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        confeccionarUsuario : () => confeccionarUsuario(dispatch)
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListaUsuarios)   
 