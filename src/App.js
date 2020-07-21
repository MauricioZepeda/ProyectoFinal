import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import Navbar from './components/commons/navbar.component'; 
import NotFound from './components/commons/notfound.component';
import Usuario from './pages/usuario.component'; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Suspense fallback={(<SyncLoader />)}> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Usuario} />  
          <Route component={NotFound} />
        </Switch>  
    </Suspense>
  );
}

export default App;
