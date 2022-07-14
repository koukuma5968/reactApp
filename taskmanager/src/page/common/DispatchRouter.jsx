import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../login.jsx';
import Home from '../home/homeApp.jsx';

function DispatchRouter() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/chartview/home/*' component={Home} />
    </BrowserRouter>
  );
}
export default DispatchRouter;