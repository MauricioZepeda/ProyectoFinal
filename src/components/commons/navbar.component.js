import React from 'react'; 
import { Link } from "react-router-dom";

const Navbar = () => {  
  return (   
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow pb-1">
        <div className="container pt-1">
            <div className="row">
                <div className="col-6">
                  <Link to="/">
                    <label className="h1 link" ><i className="fab fa-react fa-lg"></i> Proyecto Final </label>
                  </Link>
                </div>
                <div className="col-6 text-right">
                  <Link to="/settings">
                    <label className="h2 link"><i className="fas fa-cog fa-spin mt-1"></i></label>
                  </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}


Navbar.displayName = 'Navbar';

export default Navbar