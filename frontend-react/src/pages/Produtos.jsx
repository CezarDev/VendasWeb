import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { mostraMensagemExluir, listar, cadastrarAtualizarOuExcluir } from "../services/requests";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "descricao", headerName: "Descrição", width: 200 },
  { field: "valor", headerName: "Valor", width: 150 },
  {
    field: "acoes",
    headerName: "Ações",
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

const handleExcluir = (produtoId) => {
  mostraMensagemExluir(produtoId, `produtos/${produtoId}`);
  console.log(`Excluir produto ID: ${produtoId}`);
};

export default function Produtos() {
  const [produtos, setProdutos] = useState({});

  useEffect(() => {
    const listaDeProdutos = listar("Produtos", "produtos", setProdutos);
    setProdutos(listaDeProdutos);
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={produtos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onCellClick={(cell) => {
          console.log(cell.row);
        }}
        editMode="cell"
      />
    </div>
  );
}
