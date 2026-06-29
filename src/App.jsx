import { useAuth } from './context/useAuth';
import { TaskProvider } from './context/TaskContext';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TaskProvider key={user?.id ?? 'no-user'}>
          <Wrapper>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path='/' element={<MainPage />}>
                  <Route path='new-card' element={<NewCardPage />} />
                  <Route path='card/:id' element={<CardPage />} />
                </Route>
                <Route path='/exit' element={<ExitPage />} />
              </Route>

              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Wrapper>
        </TaskProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
