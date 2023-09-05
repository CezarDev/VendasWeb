import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectClientes({ clientes, label}) {

    const [valor, setValor] = useState('');


//   const handleChange = (event) => {
//     onChange(event.target.value);
//   };

    var clientes = [
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
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-clientes">
          Clientes
        </InputLabel>
        <Select
          native
          value={valor}
          onChange={setValor}
          label={label}
          inputProps={{
            id: `select-${label}`,
          }}
        >
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
