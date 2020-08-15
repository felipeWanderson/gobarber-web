import React from 'react';
import GlobalStyle from './styles/global';
import SingnIn from './pages/SingnIn';

const App: React.FC = () => {
  return (
    <>
      <SingnIn />
      <GlobalStyle />
    </>
  );
};

export default App;
