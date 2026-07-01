import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import {
  AuthWrapper,
  AuthForm,
  AuthTitle,
  Input,
  Button,
  ErrorText,
  HintText,
  StyledLink,
  HintWrapper,
} from '../../components/Shared/AuthForm.styled';
import { signIn } from '../../services/auth';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ login: false, password: false });
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFieldChange = (field, value, setter) => {
    setter(value);
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const validate = () => {
    const newErrors = {
      login: !login.trim(),
      password: !password.trim(),
    };
    setErrors(newErrors);
    return !newErrors.login && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const user = await signIn({ login, password });
      handleLogin(user);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const isButtonDisabled = errors.login || errors.password;

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Вход</AuthTitle>
        <Input
          type='text'
          placeholder='Email'
          value={login}
          onChange={(e) => handleFieldChange('login', e.target.value, setLogin)}
          $error={errors.login}
          required
        />
        {errors.login && <ErrorText>Введите email</ErrorText>}
        <Input
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={(e) =>
            handleFieldChange('password', e.target.value, setPassword)
          }
          $error={errors.password}
          required
        />
        {errors.password && <ErrorText>Введите пароль</ErrorText>}
        <Button type='submit' disabled={isButtonDisabled}>
          Войти
        </Button>
        <HintWrapper>
          <HintText>Нужно зарегистрироваться?</HintText>
          <br />
          <StyledLink to='/register'>Регистрируйтесь здесь</StyledLink>
        </HintWrapper>
      </AuthForm>
    </AuthWrapper>
  );
};

export default LoginPage;