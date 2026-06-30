import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './context/useAuth';
import { TaskProvider } from './context/TaskContext';
import { ThemeProviderComponent } from './context/ThemeContext';
import { useTheme } from './context/useTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';
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
  const { currentTheme } = useTheme();
  const theme = currentTheme === 'light' ? lightTheme : darkTheme;
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
                  <Route path='/exit' element={<ExitPage />} />
                </Route>
              </Route>

              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Wrapper>
        </TaskProvider>
      </ThemeProvider>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={currentTheme === 'dark' ? 'dark' : 'light'}
      />
    </BrowserRouter>
  );
}

export default function Root() {
  return (
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  );
}
