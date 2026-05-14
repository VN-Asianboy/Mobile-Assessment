// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode
      ? {
          background: '#121212',
          text: '#ffffff',
          button: '#bb86fc',
          buttonText: '#000000',
          header: '#1f1f1f',
          headerTitle: '#ffffff',
        }
      : {
          background: '#ffffff',
          text: '#000000',
          button: '#cb6d4f',
          buttonText: '#000000',
          header: '#efefef',
          headerTitle: '#000000',
        },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};