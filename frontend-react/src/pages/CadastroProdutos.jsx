import React from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import  FormControl from '@mui/material';
import TipoDeProdutosSelect from "../components/SelectTipoProduto";

const CadastroProdutos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Cliente
        </Typography>
        <FormControl onSubmit={handleSubmit}>
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
                id="descricao"
                label="Descrição do Produto"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="valor"
                label="Valor"
                variant="outlined"
                type="double"
              />
            </Grid>

              <TipoDeProdutosSelect />
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default CadastroProdutos;
