import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialUIButton } from '@mui/material';

const Botao = ({ text, ...props }) => {
  return (
    <MaterialUIButton {...props}>
      {text}
    </MaterialUIButton>
  );
};

Botao.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Botao;
