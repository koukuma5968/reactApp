import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../login.jsx';
import Home from '../home/homeApp.jsx';
import NewUser from '../new/user/createUserApp.jsx';
import UserResult from '../new/user/userResult.jsx';

function DispatchRouter() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/chartview/home/*' component={Home} />
        <Route exact path='/chartview/create' component={NewUser} />
        <Route exact path='/chartview/userresult' component={UserResult} />
    </BrowserRouter>
  );
}
export default DispatchRouter;