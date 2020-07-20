import React from 'react'; 
import Moment from 'react-moment';

// REDUX
import { connect } from 'react-redux';
import { seleccionarUsuario } from '../../redux/actions/usuario.actions';
import { urlBanderas } from '../../constants';

const Usuario = ({ usuario, usuarioSeleccionado, seleccionarUsuario, listaBanderas }) => {  
    const activo = (usuarioSeleccionado.id === usuario.id) ? " active" : "" ;
    const fechaCreacion = usuario.createdAt;
    const fechaModificacion = usuario.updatedAt;
    const banderaImagen = listaBanderas.find(bandera =>  bandera.code === usuario.pais);
 
    return (  
        <a href="#!" 
            onClick={ () => seleccionarUsuario(usuario) }
            className={ `list-group-item list-group-item-action flex-column align-items-start pb-0 ${activo}` }
        > 
            <div className="row">
                <div className="col-2 d-flex align-items-center"> 
                    <img src={banderaImagen.flag} width="80" height="60" className="rounded border border-dark img-fluid" alt={banderaImagen.nombre}></img>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-capitalize">{usuario.nombre} {usuario.apellido}</h4> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 d-flex flex-column">
                            <h5>País: { banderaImagen.nombre }</h5>
                            <h5>Ciudad: {(usuario.ciudad === '') ? "No ingresada" : usuario.ciudad}</h5>
                        </div>
                        <div className="col-4 d-flex flex-column">
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
    const { usuario, banderas } = state;
    return { 
        usuarioSeleccionado : usuario.usuarioSeleccionado,
        listaBanderas: banderas.listaBanderas 
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
        seleccionarUsuario: (usuario) => seleccionarUsuario(dispatch, usuario)
    }
}

Usuario.displayName = 'Usuario';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Usuario)