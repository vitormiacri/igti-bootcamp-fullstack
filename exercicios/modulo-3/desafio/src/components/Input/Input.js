import React from 'react';

import { Container, CustomInput } from './styles';

function Input({ width, color, label, handleChange, ...props }) {
  return (
    <Container width={width}>
      <label>{label}</label>
      <CustomInput color={color} onChange={handleChange} {...props} />
    </Container>
  );
}

export default Input;
