import React from 'react';   
import Usuario from './usuario.component'; 
 
// REDUX
import { connect } from 'react-redux'; 
import { confeccionarUsuario } from '../../redux/actions/usuario.actions';

const ListaUsuarios = ({usuarios, confeccionarUsuario}) => { 
    return ( 
        <div>  
            <div className="row">
                <div className="col-10">
                    <h1><i className="fas fa-users pr-2"></i>Usuarios ingresados</h1>    
                </div>
                <div className="col-2 text-right pt-1">
                    <button className="btn btn-success shadow" onClick={confeccionarUsuario}>Nuevo</button>
                </div>
            </div>
    
            <div className="list-group shadow">
                { usuarios.map(usr => <Usuario key={usr.id} usuario={usr} />)} 
            </div> 
        </div> 
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


ListaUsuarios.displayName = 'ListaUsuarios';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListaUsuarios)   
 