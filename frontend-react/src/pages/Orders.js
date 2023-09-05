import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, description, amount) {
  return { id, date, name,description, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Venda de livros',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'Venda de eletrônicos',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz',  'Venda de relógio',100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    // 'Gary, IN',
    // 'AMEX ⠀•••• 2000',
      'Ebooks',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    // 'Long Branch, NJ',
    // 'VISA ⠀•••• 5919',
      'Camisas',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Últimas vendas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Cliente</TableCell>
            {/*<TableCell>Ship To</TableCell>*/}
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Valor total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              {/*<TableCell>{row.shipTo}</TableCell>*/}
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Veja mais vendas
      </Link>
    </React.Fragment>
  );
}
