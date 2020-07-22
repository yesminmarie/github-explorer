import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';

// "/" -> rota raiz: é a primeira página.
// component={Dashboard} -> componente mostrado em tela quando acessar esse endereço.
// <Switch> -> faz com que apenas uma rota seja exibida, senão são exibidas as duas ao mesmo tempo.
// :repository+ -> + indica que tudo que vem depois da barra é um parâmetro
// e não confunde a '/' que tem no parâmetro com uma rota.
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
