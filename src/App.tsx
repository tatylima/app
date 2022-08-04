import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;