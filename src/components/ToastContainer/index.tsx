import React from 'react';

import { useTransition } from 'react-spring';
import { ToastMessages } from '../../hooks/toast';
import Toast from './Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessages[];
}
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWhithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messagesWhithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
