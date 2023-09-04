import React from 'react';
import { TextField, Button, Container, Paper, Typography, Grid } from '@mui/material';

const CadastroCliente = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cpf"
                label="CPF"
                variant="outlined"
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CadastroCliente;
