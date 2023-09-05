import React, { useState } from 'react';
import { Grid, Button, Typography, TextField, Box } from '@mui/material';
import SelectTipoProduto from '../components/SelectTipoProduto';
import SelectClientes from '../components/SelectClientes';

const CadastroVenda = () => {
    const [produtoSelecionado, setProdutoSelecionado] = useState('');
    const [clienteSelecionado, setClienteSelecionado] = useState([]);
    const [quantidade, setQuantidade] = useState(0);

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

    const handleProdutoChange = (value) => {
        setProdutoSelecionado(value);
    };

    const handleClienteChange = (event) => {
        const selectedClients = Array.from(event.target.selectedOptions, (option) => option.value);
        setClienteSelecionado(selectedClients);
    };

    const handleQuantidadeChange = (event) => {
        setQuantidade(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Adicione o código para lidar com o envio do formulário aqui
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Cadastro de Venda
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SelectTipoProduto value={produtoSelecionado} onChange={handleProdutoChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <label>Clientes:</label>
                        <select
                            multiple
                            value={clienteSelecionado}
                            onChange={handleClienteChange}
                            style={{ width: '100%' }}
                        >
                            {names.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Quantidade de Produtos"
                        type="number"
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Cadastrar Venda
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CadastroVenda;
