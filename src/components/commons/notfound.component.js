import React from 'react';  
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container">
        <div className="h1 text-center pt-5">
            <i className="fas fa-exclamation-triangle"></i> 
            {"  "} 404 Not Found {"  "}
            <i className="fas fa-bug"></i>
        </div>

        <div className="h1 text-center pt-5">
            <Link to='/'> 
                <button className="btn btn-info shadow"> <i class="fas fa-arrow-left"></i> Volver</button>
            </Link>
        </div>
    </div>
);

NotFound.displayName = 'NotFound';

export default NotFound;