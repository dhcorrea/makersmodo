import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import ProjectRegister from './pages/projectRegister/projectRegister';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project-register" component={ProjectRegister} />
      </Switch>
    </BrowserRouter>
  )
}
