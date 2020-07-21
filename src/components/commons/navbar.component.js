import React from 'react';  

import Clima from './clima.component';

const Navbar = () => {  
  return (   
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow pb-1">
        <div className="container pt-1">
            <div className="row">
                <div className="col-6  d-flex align-items-center"> 
                    <label className="h1" ><i className="fab fa-react fa-lg"></i> Proyecto Final </label> 
                </div>
                <div className="col-6 text-right">
                    <Clima />
                </div>
            </div>
        </div>
    </nav>
  )
}


Navbar.displayName = 'Navbar';

export default Navbar