import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme } from './theme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopExit from './components/PopExit/PopExit';
import './App.css';

function App() {

  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);
  const [isPopBrowseOpen, setIsPopBrowseOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit />
        <PopNewCard 
          isOpen={isPopNewCardOpen} 
          onClose={() => setIsPopNewCardOpen(false)} 
        />
        <PopBrowse 
          isOpen={isPopBrowseOpen} 
          onClose={() => setIsPopBrowseOpen(false)} 
        />
        <Header 
          onNewCard={() => setIsPopNewCardOpen(true)} 
        />
        <Main 
          onOpenCard={() => setIsPopBrowseOpen(true)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;