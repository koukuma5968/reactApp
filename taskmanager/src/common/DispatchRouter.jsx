import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../page/login.jsx';
import Home from '../page/home/homeApp.jsx';

function DispatchRouter() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
    </BrowserRouter>
  );
}
export default DispatchRouter;