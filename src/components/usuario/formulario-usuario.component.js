import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';
import { crearUsuario, actualizarUsuario, seleccionarUsuario } from '../../redux/actions/usuario.actions'

import { useFormik } from 'formik';
import * as Yup from "yup";

import Select from 'react-select'
 
const titulo = (id, nombre, usuarios) => { 
    return(
        <h1>                                      
            <label className="h1" >
                { (id === '') 
                    ? <div><i className="fas fa-user-plus pr-2"></i> {(usuarios.length > 0) ? "Nuevo usuario" : "Crea el primer usuario"} </div> 
                    : <div><i className="fas fa-user-edit pr-2"></i> Editando a {nombre}</div>  
                }
            </label>
        </h1>
    )
}

const FormularioUsuario = ({ usuarios, usuarioSeleccionado, crearUsuario, actualizarUsuario , seleccionarUsuario, paises }) => { 
    const [ id, setId ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ pais, setPais ] = useState('');
    const [ ciudad, setCiudad ] = useState(''); 
    const [ paisSeleccionado, setPaisSeleccionado ] = useState({value:'',label:''});
 
    useEffect(()=>{     
        const { id, nombre, apellido, pais, ciudad } = usuarioSeleccionado; 
            setId(id);
            setNombre(nombre);
            setApellido(apellido);
            setPais(pais);
            setCiudad(ciudad);             
            setPaisSeleccionado(paises.find(p => p.value === pais));
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
            apellido: Yup.string().required("El apellido es obligatorio"),
            pais: Yup.string().required("El país es olbigatorio"),
        }), 
        onSubmit: (formData) => {  
            const { nombre, apellido, ciudad} = formData
            let usuario = {
                nombre,
                apellido,
                pais: paisSeleccionado.value ,
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

    const handlerPais=(seleccionado)=>{  
        setNombre(formik.values.nombre);
        setApellido(formik.values.apellido);
        setCiudad(formik.values.ciudad);

        setPais(seleccionado.label);
        setPaisSeleccionado(seleccionado);
    }

    return ( 
        <div> 
            <div className="row">
                <div className="col-12">
                    { titulo(id, nombre, usuarios) }
                </div>
            </div>
 
            <div className="row">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body"> 
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label h5">Nombre <span className="text-danger">*</span></label>
                                    <label className="text-danger pl-2">{ formik.errors.nombre}</label>
                                    <input  
                                        type="text" 
                                        className="form-control form-control-md" 
                                        name="nombre" 
                                        autoComplete="off"
                                        onChange={formik.handleChange}  
                                        value={formik.values.nombre} 
                                    /> 
                                </div>
                                <div className="mb-3">
                                    <label className="form-label h5">Apellido <span className="text-danger">*</span></label>
                                    <label className="text-danger pl-2">{ formik.errors.apellido}</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-md" 
                                        name="apellido" 
                                        autoComplete="off"
                                        onChange={formik.handleChange} 
                                        value={formik.values.apellido} 
                                    />
                                </div> 
 
                                <div className="mb-3">
                                    <label className="form-label h5">País <span className="text-danger">*</span> </label>  
                                    <label className="text-danger pl-2">{ formik.errors.pais}</label>
                                    <Select  
                                        options={paises} 
                                        onChange={handlerPais} 
                                        value={paisSeleccionado}                                         
                                    /> 
                                </div> 

                                <div className="mb-3">
                                    <label className="form-label h5">Ciudad</label>  
                                    <input 
                                        type="text" 
                                        className="form-control form-control-md" 
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
    const { usuarioSeleccionado, usuarios } = state.usuario;
    const { paises } = state.territorio;
    return { 
        usuarios,
        usuarioSeleccionado,
        paises  
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return { 
      crearUsuario : (usuario) => crearUsuario(dispatch, usuario),
      actualizarUsuario : (usuario) => actualizarUsuario(dispatch, usuario),
      seleccionarUsuario: (usuario) => seleccionarUsuario(dispatch, usuario)
    }
}

FormularioUsuario.displayName = 'FormularioUsuario';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormularioUsuario) 