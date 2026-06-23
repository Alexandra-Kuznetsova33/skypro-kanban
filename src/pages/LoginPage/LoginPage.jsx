import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { AuthWrapper, AuthForm, AuthTitle, Input, Button, HintText, StyledLink, HintWrapper } from '../../components/Shared/AuthForm.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate('/');
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Вход</AuthTitle>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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