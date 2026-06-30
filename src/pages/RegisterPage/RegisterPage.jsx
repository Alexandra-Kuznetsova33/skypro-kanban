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
  StyledLink,
  HintText,
  HintWrapper,
} from '../../components/Shared/AuthForm.styled';
import { signUp } from '../../services/auth';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });
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
      name: !name.trim(),
      login: !login.trim(),
      password: !password.trim(),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.login && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const user = await signUp({ name, login, password });
      handleLogin(user);
      toast.success('Регистрация прошла успешно');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const isButtonDisabled = errors.name || errors.login || errors.password;

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>Регистрация</AuthTitle>
        <Input
          type='text'
          placeholder='Имя'
          value={name}
          onChange={(e) => handleFieldChange('name', e.target.value, setName)}
          $error={errors.name}
          required
        />
        {errors.name && <ErrorText>Введите имя</ErrorText>}
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
          Зарегистрироваться
        </Button>
        <HintWrapper>
          <HintText>Уже есть аккаунт? </HintText>
          <StyledLink to='/login'>Войдите здесь</StyledLink>
        </HintWrapper>
      </AuthForm>
    </AuthWrapper>
  );
};

export default RegisterPage;