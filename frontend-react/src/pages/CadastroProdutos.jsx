import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { listar, cadastrarAtualizarOuExcluir } from "../services/requests";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Produtos from "./Produtos";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tiposDeProduto = [
  { id: 1, nome: "Simples" },
  { id: 2, nome: "Digital" },
  { id: 3, nome: "Configurável" },
  { id: 4, nome: "Agrupado" },
  { id: 5, nome: "Composto" },
];

const CadastroProdutos = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipoProdutoId, setTipoProdutoId] = useState(null);
  const [linkProduto, setLinkProduto] = useState("");
  const [produto, setProduto] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { nome, descricao, valor: parseFloat(valor), 'tipo_produto_id':  tipoProdutoId, link: linkProduto};

    console.log(data);
    cadastrarAtualizarOuExcluir("Produtos", "produtos", data, "POST", "cadastrar")
    listar("Produtos", "produtos", data, "POST", "cadastrar", setProduto);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Produto
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
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="descricao"
                label="Descrição do Produto"
                variant="outlined"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="valor"
                label="Valor"
                variant="outlined"
                type="number"
                onChange={(e) => setValor(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel id="tipo-produtos-label">Tipo de Produto</InputLabel>
              <Select
                labelId="tipo-produtos-label"
                id="tipo-produtos-select"
                value={tipoProdutoId}
                onChange={(e) => setTipoProdutoId(e.target.value)}
                MenuProps={MenuProps}
              >
                {tiposDeProduto.map((produto) => (
                  <MenuItem key={produto.id} value={produto.id}>
                    {produto.nome}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />

        </form>

        <Produtos />
      </Paper>
    </Container>
  );
};

export default CadastroProdutos;
