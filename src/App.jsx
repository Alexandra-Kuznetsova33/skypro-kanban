import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme } from './theme';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NewCardPage from './pages/NewCardPage/NewCardPage';
import CardPage from './pages/CardPage/CardPage';
import ExitPage from './pages/ExitPage/ExitPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Wrapper from './components/Shared/Wrapper.styled';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Wrapper>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<MainPage isLoading={isLoading} />} />
                <Route path="/exit" element={<ExitPage />} />
                <Route path="/card/:id" element={<CardPage />} />
                <Route path="/new-card" element={<NewCardPage />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Wrapper>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
