import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { AuthWrapper, AuthForm, AuthTitle, Input, Button, HintText, StyledLink, HintWrapper } from '../../components/Shared/AuthForm.styled';
import { signIn } from '../../services/auth';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!login.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    try {
      const user = await signIn({ login, password });
      handleLogin(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Вход</AuthTitle>
        <Input
          type="text"
          placeholder="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <Button type="submit">Войти</Button>
         <HintWrapper>
          <HintText>Нужно зарегистрироваться?</HintText>
          <br />
          <StyledLink to="/register">Регистрируйтесь здесь</StyledLink>
        </HintWrapper>
      </AuthForm>
    </AuthWrapper>
  );
};

export default LoginPage;