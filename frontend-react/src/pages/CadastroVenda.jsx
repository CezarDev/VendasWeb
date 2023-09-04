import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import TipoDeProdutosSelect from '../../components/TipoDeProdutosSelect/TipoDeProdutosSelect'; // Importe o componente TipoDeProdutosSelect
import ClientesSelect from '../../components/ClientesSelect/ClientesSelect'; // Importe o componente de seleção de clientes
import Select from '@mui/material/Select';

const CadastroVenda = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState(0);

  const handleProdutoChange = (value) => {
    setProdutoSelecionado(value);
  };

  const handleClienteChange = (value) => {
    setClienteSelecionado(value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TipoDeProdutosSelect value={produtoSelecionado} onChange={handleProdutoChange} />
      </Grid>
      <Grid item xs={12}>
      
      <Select
          multiple
          native
          value={clienteSelecionado}
          // @ts-ignore Typings are not considering `native`
          onChange={setClienteSelecionado}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>


        <ClientesSelect value={clienteSelecionado} onChange={handleClienteChange} />
      </Grid>
      <Grid item xs={12}>
        <label>Quantidade de Produtos:</label>
        <input type="number" value={quantidade} onChange={handleQuantidadeChange} />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Cadastrar Venda
        </Button>
      </Grid>
    </Grid>
  );
};

export default CadastroVenda;
