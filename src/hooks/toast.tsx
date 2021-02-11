import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessages {
  id: string;
  type?: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}
interface ToastContextData {
  addToast(messages: Omit<ToastMessages, 'id'>): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessages[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessages, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado com o ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
