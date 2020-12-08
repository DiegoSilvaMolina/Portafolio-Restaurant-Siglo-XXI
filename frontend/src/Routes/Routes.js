import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Componentes/Login.js';
import Home from '../Componentes/Home.js';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Home" component={Home}></Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;