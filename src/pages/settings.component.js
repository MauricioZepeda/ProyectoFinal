import React from 'react'; 
  
// REDUX
import { connect } from 'react-redux'; 

//COMPONENTES
import Imagenes from '../components/settings/imagenes.component';  
 
const Settings = () => {   
    return (        
        <div className="container" >  
            <div className="row">  
                <div className="col-6"> 
                    <label className="h1 text-success">HOLA!</label>
                </div>
                <div className="col-6"> 
                    <Imagenes />
                </div>
            </div>  
        </div>  
    )
}
 
const mapStateToProps = (state) => {      
    return {  
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {        
    }
}


Settings.displayName = 'Settings';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
