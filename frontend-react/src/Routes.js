import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CadastroVenda from './pages/CadastroVenda';
import CadastroClientes from './pages/CadastroClientes';
import CadastroProdutos from './pages/CadastroProdutos';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cadastro-venda" component={CadastroVenda} />
        <Route path="/cadastro-cliente" component={CadastroClientes} />
        <Route path="/cadastro-produto" component={CadastroProdutos} />
      </Switch>
    </Router>
  );
};

export default Routes;
