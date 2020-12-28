import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/bienio" exact component={Home} />
    <Route path="/bienio/sobre" component={Sobre} />
  </Switch>
);
export default Routes;
