import React, {Fragment} from 'react'; 
 
const ListaUsuarios = ({ usuarios }) => {   
    return ( 
        <Fragment>
            <h1>usuarios registrados</h1>
            <ul className="list-group">
             { usuarios.map(usuario => <li  className="list-group-item" key={usuario.id}>{usuario.name}</li>)}
            </ul>
        </Fragment> 
    );
} 

export default ListaUsuarios;