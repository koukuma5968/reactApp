import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Articlelist from '../pages/Articlelist';
import ArticlePage from '../pages/ArticlePage';

function DispatchRouter() {
  return (
    <BrowserRouter>
        <Route exact path='/blog/' component={Articlelist} />
        <Route path='/blog/article:param' component={ArticlePage} /> 
    </BrowserRouter>
  );
}
export default DispatchRouter;