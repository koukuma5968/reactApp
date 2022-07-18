import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../login.jsx';
import CreateUser from '../new/user/createUserApp.jsx';
import UserResult from '../new/user/UserResult.jsx';
import Home from '../home/homeApp.jsx';

function DispatchRouter() {
  return (
    <BrowserRouter>
        <Route exact path='/task/login' component={Login} />
        <Route exact path='/task/create' component={CreateUser} />
        <Route exact path='/task/userresult' component={UserResult} />
        <Route exact path='/task/home/*' component={Home} />
    </BrowserRouter>
  );
}
export default DispatchRouter;