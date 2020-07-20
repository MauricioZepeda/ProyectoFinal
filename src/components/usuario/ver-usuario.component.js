import React from 'react';
import Moment from 'react-moment';

// REDUX
import { connect } from 'react-redux';
import { editarUsuario, eliminarUsuario } from '../../redux/actions/usuario.actions';

const VerUsuario = ({usuarioSeleccionado, editarUsuario, eliminarUsuario}) => {
    const { nombre, apellido, pais, ciudad, createdAt,updatedAt } = usuarioSeleccionado;
    
    return (
      <div>
        <div className="row">
          <div className="col-9">
            <h1>
              <i className="fas fa-user pr-2"></i> 
              Datos del usuario
            </h1>
          </div>
          <div className="col-3 d-flex">
            <button
              className="btn btn-info shadow align-self-center ml-3"
              onClick={() => editarUsuario(usuarioSeleccionado)}
            >
              <i className="far fa-edit fa-md"></i>
            </button>

            <button
              className="btn btn-danger shadow align-self-center ml-3"
              onClick={() => eliminarUsuario(usuarioSeleccionado.id)}
            >
              <i className="far fa-trash-alt fa-md"></i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 border-bottom mb-3">
                    <h5> Nombre </h5>
                    <h3 className="pl-4 text-capitalize"> { nombre } </h3>
                  </div>
                  <div className="col-12 border-bottom mb-3" hidden={ apellido === '' }>
                    <h5> Apellido </h5>
                    <h3 className="pl-4 text-capitalize"> { apellido } </h3>
                  </div>
                  <div className="col-12 border-bottom mb-3" hidden={ pais === '' }>
                    <h5> País </h5>
                    <h3 className="pl-4"> {pais} </h3>
                  </div>
                  <div className="col-12 border-bottom mb-3" hidden={ ciudad === '' }>
                    <h5> Ciudad </h5>
                    <h3 className="pl-4 text-capitalize"> { ciudad } </h3>
                  </div>
                  <div className="col-12">
                    <h5 className="text-success"> Creado el </h5>
                    <h3 className="pl-4"> <Moment date={ createdAt } format="D MMMM YYYY | HH:MM" /> </h3>
                  </div>
                  <div className="col-12 border-top pt-3" hidden={ updatedAt === createdAt }>
                    <h5 className="text-danger"> Última modificación hace</h5>
                    <h3 className="pl-4 text-capitalize"> <Moment date={ updatedAt } fromNow ago /></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
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


VerUsuario.displayName = 'VerUsuario';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerUsuario)  