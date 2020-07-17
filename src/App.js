import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages 
import Usuario from './pages/usuario/usuario.component';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Usuario} /> 
    </Switch>
  );
}

export default App;
