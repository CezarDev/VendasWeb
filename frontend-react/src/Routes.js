import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes ,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CadastroVenda from './pages/CadastroVenda';
import CadastroClientes from './pages/CadastroClientes';
import CadastroProdutos from './pages/CadastroProdutos';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}> </Route>
                <Route path="/cadastro-venda" element={<CadastroVenda />}> </Route>
                <Route path="/cadastro-cliente" element={<CadastroClientes />}> </Route>
                <Route path="/cadastro-produto" element={< CadastroProdutos />}> </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
