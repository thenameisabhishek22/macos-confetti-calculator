import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Calculator from './Calculator';
import themes from '../styles/theme';
import '../styles/App.css';

function App() {
  const [theme, setTheme] = useState('dark');


  return (
    <ThemeProvider theme={themes[theme]}>
      <div className="App">
        <Calculator />
      </div>
    </ThemeProvider>
  );
}

export default App;
