import React from 'react'; 

const NotFound = () => (
    <div className="h1 text-center pt-5">
        <i className="fas fa-exclamation-triangle"></i> 
        {"  "} 404 Not Found {"  "}
        <i className="fas fa-bug"></i>
    </div>
);

NotFound.displayName = 'NotFound';

export default NotFound;