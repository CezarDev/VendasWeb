import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import { mostraMensagemExluir,  listar } from "../services/requests";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'cpf',  headerName: 'CPF',  width: 150, },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: (params) => (
      <div>
        <button onClick={() => handleEditar(params.row)}>Editar</button>
        <> </>
        <button onClick={() => handleExcluir(params.row.id)}>Excluir</button>
      </div>
    ),
  },
];

const handleEditar = (row) => {
    console.log(`Editar cliente: ${row.nome}`);
  };
  
  const handleExcluir = (clienteId) => {
    mostraMensagemExluir(clienteId, `clientes/${clienteId}`);
    console.log(`Excluir cliente ID: ${clienteId}`);
    
  };

  
export default function Clientes() {

    const [clientes, setClientes] = useState({})

    useEffect(() => {
            const listaDeClientes = listar('Clientes', 'clientes', setClientes)
            setClientes(listaDeClientes)
    }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={clientes}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onCellClick={(cell) => {console.log(cell.row)}}
        editMode='cell'
      />
    </div>
  );
}
