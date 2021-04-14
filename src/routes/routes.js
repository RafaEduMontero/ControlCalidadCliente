import React,{ Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleCalidad from '../pages/DetalleCalidad/detalleCalidad';
import InicioCalidad from '../pages/InicioCalidad/inicioCalidad';
import InicioLinea from '../pages/InicioLinea/inicioLinea';
import Login from '../pages/Login/login';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route exact path="/iniciolinea" component={InicioLinea}/>
            <Route exact path="/iniciocalidad" component={InicioCalidad}/>
            <Route exact path="/iniciocalidad/opseleccionada/:id" component={DetalleCalidad}/>
        </BrowserRouter>
    )
}

export default Routes;