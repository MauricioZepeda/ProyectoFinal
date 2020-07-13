import React, {Fragment} from 'react';   
import Usuario from './usuario.component'; 

const ListaUsuarios = ({ usuarios }) => { 
      
    return ( 
        <Fragment>
            <h1>usuarios registrados</h1>
            <ul className="list-group">
             { usuarios.map(usr => <Usuario key={usr.id} usuario={usr} />)}
            </ul>
        </Fragment> 
    );
} 
   

export default ListaUsuarios;
 