import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Create Context
const ColorModeContext = createContext();

export function useColorMode() {
  return useContext(ColorModeContext);
}

export default function ThemeToggleProvider({ children }) {
  const [mode, setMode] = useState('light');

  // Load saved preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') setMode(stored);
  }, []);

  // Save preference
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() =>
    createTheme({
      palette: { mode },
    }), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}