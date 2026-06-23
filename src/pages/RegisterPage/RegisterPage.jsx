import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { AuthWrapper, AuthForm,  AuthTitle, Input, Button, StyledLink, HintText, HintWrapper } from '../../components/Shared/AuthForm.styled';


const RegisterPage = () => {
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
    <AuthWrapper>  {}
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Регистрация</AuthTitle>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Зарегистрироваться</Button>
        <HintWrapper>
          <HintText>Уже есть аккаунт? </HintText>
          <StyledLink to="/login">Войдите здесь</StyledLink>
        </HintWrapper>
      </AuthForm>
    </AuthWrapper>
  );
};

export default RegisterPage;