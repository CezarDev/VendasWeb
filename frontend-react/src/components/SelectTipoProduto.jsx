import React, {useState} from 'react';
import useTheme from '@mui/material/styles/useTheme';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

function getStyles(name, personName, theme) {
  if(personName) {
    return {
      fontWeight:
          personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
    };
  }
}

const TipoDeProdutosSelect = ({ value, onChange }) => {
  const [valor, setValor] = useState([])

  const produtos = [
    'Simples',
    'Digital',
    'Configurável',
    'Agrupado',
    'Composto',
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="tipo-produtos-label">Tipo de Produto</InputLabel>
      <Select
        labelId="tipo-produtos-label"
        id="tipo-produtos-select"
        multiple
        value={valor}
        onChange={setValor}
        MenuProps={MenuProps}
      >
        {produtos.map((produto) => (
          <MenuItem
            key={produto}
            value={produto}
            // style={getStyles(produto, value, theme)}
          >
            {produto}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TipoDeProdutosSelect;
