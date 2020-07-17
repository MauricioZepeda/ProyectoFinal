import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';
import { crearUsuario, actualizarUsuario, seleccionarUsuario } from '../../redux/actions/usuario.actions'

import { useFormik } from 'formik';
import * as Yup from "yup";

const FormularioUsuario = ({ usuarioSeleccionado, crearUsuario, actualizarUsuario , seleccionarUsuario}) => { 
    const [ id, setId ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ pais, setPais ] = useState('');
    const [ ciudad, setCiudad ] = useState('');

    useEffect(()=>{   
        const id = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.id : "";
        const nombre = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.nombre : "";
        const apellido = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.apellido : ""; 
        const pais = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.pais : ""; 
        const ciudad = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.ciudad : "";  
      
        setId(id);
        setNombre(nombre);
        setApellido(apellido);
        setPais(pais);
        setCiudad(ciudad);  
    },[usuarioSeleccionado])
    
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
        // formik.handleReset();
        // setId('');
        // setNombre('');
        // setApellido(''); 
        // setPais('');
        // setCiudad('');
        seleccionarUsuario(usuarioSeleccionado.usuario);
    }

    return ( 
        <div className="container mt-3">
            <label className="h2" >{ (id === '') ? "Nuevo usuario" : "Editar Usuario" }</label>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <label className="text-danger pl-2">{ formik.errors.nombre}</label>
                    <input  
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        autoComplete="off"
                        onChange={formik.handleChange}  
                        value={formik.values.nombre} 
                    /> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido </label> 
                    <label className="text-danger pl-2">{ formik.errors.apellido}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="apellido" 
                        autoComplete="off"
                        onChange={formik.handleChange} 
                        value={formik.values.apellido} 
                    />
                </div> 
                <div className="mb-3">
                    <label className="form-label">País </label>  
                    <input 
                        type="text" 
                        className="form-control" 
                        name="pais" 
                        autoComplete="off"
                        onChange={formik.handleChange} 
                        value={formik.values.pais} 
                    />
                </div> 
                <div className="mb-3">
                    <label className="form-label">Ciudad</label>  
                    <input 
                        type="text" 
                        className="form-control" 
                        name="ciudad" 
                        autoComplete="off"
                        onChange={formik.handleChange} 
                        value={formik.values.ciudad} 
                    />
                </div> 
                <button  className="btn btn-danger" onClick={handlerCancelar}>Cancelar</button>
                <button  className="btn btn-primary ml-3">Guardar</button>
            </form>
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