// src/App.js
import React from 'react';
import CustomQueryClientProvider from './QueryClientProvider';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <CustomQueryClientProvider>
      <h1>Formulário com React Query e React Hook Form</h1>
      <Formulario />
    </CustomQueryClientProvider>
  );
};

export default App;