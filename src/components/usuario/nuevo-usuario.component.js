import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";

const NuevoUsuario = ({ usuarioSeleccionado }) => { 
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');

    useEffect(()=>{ 
        const nombre = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.name : "";
        const apellido = (usuarioSeleccionado.usuario) ? usuarioSeleccionado.usuario.username : ""; 
        setNombre(nombre);
        setApellido(apellido); 
    },[usuarioSeleccionado])
    
    const formik = useFormik({
        initialValues: {
            nombre: nombre,
            apellido: apellido 
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es obligatorio"),
            apellido: Yup.string().required("El apellido es olbigatorio"),
        }),
        onSubmit: (formData) => { 
            console.log("===> ",formData);
        }
    })

    const handlerLimpiar = () => {
        formik.handleReset()
        setNombre('');
        setApellido(''); 
    }
    return ( 
        <div className="container mt-3">
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
                <button  className="btn btn-danger" onClick={handlerLimpiar}>Limpiar</button>
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
      
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NuevoUsuario) 