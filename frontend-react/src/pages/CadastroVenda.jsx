import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CadastroVenda = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [venda, setVenda] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [descricao, setDescricao] = useState('');

  const [itens, setItens] = useState([
    {
      id: produtoSelecionado.id,
      descricao: produtoSelecionado.descricao,
      quantidade: quantidade,
    },
  ]);

  const [cliente, setCliente] = useState({
    id: clienteSelecionado.id,
    nome: clienteSelecionado.nome,
    cpf: clienteSelecionado.cpf,
    email: clienteSelecionado.email,
  });

  const [produtoSelecionadoId, setProdutoSelecionadoId] = useState(''); 

  const handleItemChange = (index, field, value) => {
    const updatedItens = [...itens];
    updatedItens[index][field] = value;
    setItens(updatedItens);
  };

  const handleProdutoChange = (event) => {
    const selectedProductId = event.target.value;
    setProdutoSelecionado(selectedProductId);
    setProdutoSelecionadoId(selectedProductId);
  };

  useEffect(() => {
    fetch('http://localhost:3030/produtos')
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });

    fetch('http://localhost:3030/clientes')
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mappedItens = itens.map((item) => ({
      id: produtoSelecionadoId,
      descricao: item.descricao,
      quantidade: item.quantidade,
    }));

    const venda = {
      descricao,
      cliente,
      itens: mappedItens,
    };

    console.log(venda);

    // Resto do seu código para cadastrar a venda...
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Venda
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InputLabel id="produto-label">Produtos</InputLabel>
              <Select
                labelId="produto-label"
                id="produto-select"
                value={produtoSelecionado}
                onChange={handleProdutoChange}
                fullWidth
              >
                <MenuItem value="" defaultChecked={true}>
                  <em>Selecione</em>
                </MenuItem>
                {produtos.map((produto) => (
                  <MenuItem key={produto.id} value={produto.id}>
                    {produto.nome}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel id="cliente-label">Clientes</InputLabel>
              <Select
                labelId="cliente-label"
                id="cliente-select"
                value={clienteSelecionado}
                onChange={(e) => setClienteSelecionado(e.target.value)}
                fullWidth
              >
                {clientes.map((cliente) => (
                  <MenuItem key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="descricao"
                label="Descrição da venda"
                variant="outlined"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                required
                fullWidth
                label="Quantidade de Produtos"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Button
                onClick={() =>
                  setItens([
                    ...itens,
                    {
                      id: produtoSelecionado.id,
                      descricao: produtoSelecionado.descricao,
                      quantidade: quantidade,
                    },
                  ])
                }
              >
                Adicionar Item
              </Button>

            {itens.map((item, index) => (
              <Grid item container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label={`Descrição do Item ${index + 1}`}
                    variant="outlined"
                    value={item.descricao}
                    onChange={(e) =>
                      handleItemChange(index, 'descricao', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label={`Quantidade do Item ${index + 1}`}
                    variant="outlined"
                    type="number"
                    value={item.quantidade}
                    onChange={(e) =>
                      handleItemChange(index, 'quantidade', e.target.value)
                    }
                  />
                </Grid>
              </Grid>
            ))}

            {itens.length > 0 && (
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar Venda
                </Button>
              </Grid>
            )}
          </Grid>
        </form>
        {/* Renderize aqui a informação da venda cadastrada */}
      </Paper>
    </Container>
  );
};

export default CadastroVenda;
