import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sobre" exact component={Sobre} />
  </Switch>
);
export default Routes;
