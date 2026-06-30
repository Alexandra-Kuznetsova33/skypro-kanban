import { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProviderComponent({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('appTheme');
    return saved || 'light';
  });

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('appTheme', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;