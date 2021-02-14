import React, { ButtonHTMLAttributes } from 'react';

// quando temos uma iterface vazia
// (sem altear ou adicionar navas propriedades)
// usamos type = ao inves de interface
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
