import React from 'react';
import { useEffect, useState } from "react";
import { TextField, Button, Container, Paper, Typography, Grid } from '@mui/material';
import Clientes from './Clientes';
import  {listar, cadastrarAtualizarOuExcluir}  from '../services/requests';

const CadastroCliente = () => {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [clientes, setClientes] = useState({})

  // useEffect(() => {
  //         const listaDeClientes = listar('Clientes', 'clientes', setClientes)
  //         setClientes(listaDeClientes)
  //         console.log(listaDeClientes)
  // }, []);

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handleCpf = (e) => {
    setCpf(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = async () => {
    setNome('');
    setCpf('');
    setEmail('');
  };

  const handleSubmit  =  async (e) => {
    e.preventDefault();

    const data = { nome, cpf, email };

   await cadastrarAtualizarOuExcluir('Clientes', 'clientes', data, 'POST', 'cadastrar', handleReset)
   await handleReset();
    const listaDeClientes = await listar('Clientes', 'clientes', setClientes)
    setClientes(listaDeClientes);
  }

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Cliente
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="nome"
                label="Nome"
                variant="outlined"
                onChange={handleNome}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cpf"
                label="CPF"
                variant="outlined"
                onChange={handleCpf}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                Cadastrar
              </Button>
              <br />
              <br />
            </Grid>
          </Grid>
        </form>
        <Clientes />
      </Paper>
    </Container>
  );
};

export default CadastroCliente;
