import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { AuthWrapper, AuthForm,  AuthTitle, Input, Button, StyledLink, HintText, HintWrapper } from '../../components/Shared/AuthForm.styled';
import { signUp } from '../../services/auth';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !login.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    try {
      const user = await signUp({ name, login, password });
      handleLogin(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthWrapper>  
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Регистрация</AuthTitle>
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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