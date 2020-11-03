import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import ProjectRegister from './pages/projectRegister/projectRegister';
import ProjectDetails from './pages/projectDetails/projectDetails';
import ScrollIntoView from './components/ScrollIntoView/scrollIndoView';

export default function Routes(){
  return(
    <BrowserRouter>
      <ScrollIntoView>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project-register" component={ProjectRegister} />
          <Route path="/project-details" component={ProjectDetails} />
        </Switch>
      </ScrollIntoView>
    </BrowserRouter>
  )
}
