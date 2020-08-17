import React, { ButtonHTMLAttributes } from 'react';

// quando temos uma iterface vazia
// (sem altear ou adicionar navas propriedades)
// usamos type = ao inves de interface
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
