import React from 'react'; 
  
// REDUX
import { connect } from 'react-redux'; 

//COMPONENTES
import Imagenes from '../components/settings/imagenes.component';  
 
const Settings = () => {   
    return (        
        <div className="container pt-5" >  
            <div className="row">   
                <div className="col-6 offset-2"> 
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
