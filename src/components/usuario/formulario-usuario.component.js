import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';
import { crearUsuario, actualizarUsuario, seleccionarUsuario } from '../../redux/actions/usuario.actions'

import { useFormik } from 'formik';
import * as Yup from "yup";

const FormularioUsuario = ({ usuarioSeleccionado, crearUsuario, actualizarUsuario , seleccionarUsuario }) => { 
    const [ id, setId ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ pais, setPais ] = useState('');
    const [ ciudad, setCiudad ] = useState('');

    useEffect(()=>{    
        establecerUsuario(usuarioSeleccionado);
    },[usuarioSeleccionado])
    
    const establecerUsuario = (usuarioDesplegar) => { 
        const { id, nombre, apellido, pais, ciudad } = usuarioDesplegar; 
        setId(id);
        setNombre(nombre);
        setApellido(apellido);
        setPais(pais);
        setCiudad(ciudad);   
    }

    const formik = useFormik({
        initialValues: {
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            ciudad: ciudad 
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es obligatorio"),
            apellido: Yup.string().required("El apellido es olbigatorio"),
        }), 
        onSubmit: (formData) => {  
            const { nombre, apellido, pais, ciudad} = formData
            let usuario = {
                nombre,
                apellido,
                pais,
                ciudad
            }

            if(id === '') {
                crearUsuario(usuario); 
            } else {
                actualizarUsuario({
                    id,
                    ...usuario
                }); 
            }  
        }
    });

    const handlerCancelar = () => { 
        seleccionarUsuario(usuarioSeleccionado);
    }
    const titulo = () => {
        return(
            <h1>                                      
                <label className="h1" >
                    { (id === '') 
                        ? <div><i className="fas fa-user-plus pr-2"></i> Nuevo usuario</div> 
                        : <div><i className="fas fa-user-edit pr-2"></i> Editando a {nombre}</div>  
                    }
                </label>
            </h1>
        )
    }
    return ( 
        <div> 
            <div className="row">
                <div className="col-12">
                    { titulo() }
                </div>
            </div>
 
            <div className="row">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body"> 
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label h5">Nombre</label>
                                    <label className="text-danger pl-2">{ formik.errors.nombre}</label>
                                    <input  
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        name="nombre" 
                                        autoComplete="off"
                                        onChange={formik.handleChange}  
                                        value={formik.values.nombre} 
                                    /> 
                                </div>
                                <div className="mb-3">
                                    <label className="form-label h5">Apellido </label> 
                                    <label className="text-danger pl-2">{ formik.errors.apellido}</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        name="apellido" 
                                        autoComplete="off"
                                        onChange={formik.handleChange} 
                                        value={formik.values.apellido} 
                                    />
                                </div> 
                                <div className="mb-3">
                                    <label className="form-label h5">País </label>  
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        name="pais" 
                                        autoComplete="off"
                                        onChange={formik.handleChange} 
                                        value={formik.values.pais} 
                                    />
                                </div> 
                                <div className="mb-3">
                                    <label className="form-label h5">Ciudad</label>  
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        name="ciudad" 
                                        autoComplete="off"
                                        onChange={formik.handleChange} 
                                        value={formik.values.ciudad} 
                                    />
                                </div> 
                                <div className="py-2 d-flex justify-content-evenly">
                                    <button  className="btn btn-danger shadow" onClick={handlerCancelar}><i className="fas fa-times"></i> Cancelar</button>
                                    <button  type="submit" className="btn btn-primary shadow ml-3"> <i className="fas fa-check"></i> { (id === '') ? "Crear usuario" : "Guardar cambios" } </button>                     
                                </div> 
                            </form> 
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
      crearUsuario : (usuario) => crearUsuario(dispatch, usuario),
      actualizarUsuario : (usuario) => actualizarUsuario(dispatch, usuario),
      seleccionarUsuario: (usuario) => seleccionarUsuario(dispatch, usuario)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormularioUsuario) 