import { useAuth } from '../../context/useAuth';
import {
  PopUserContainer,
  UserName,
  UserMail,
  ThemeToggle,
  ExitButton,
} from './PopUser.styled.js';
import { Link } from 'react-router-dom';

function PopUser({ isOpen }) {
  const { user } = useAuth();
  return (
    <PopUserContainer $isOpen={isOpen}>
      <UserName>{user.name || 'Пользователь'}</UserName>
      <UserMail>{user.login || 'email@example.com'}</UserMail>
      <ThemeToggle>
        <p>Темная тема</p>
        <input type='checkbox' />
      </ThemeToggle>
      <ExitButton as={Link} to='/exit'>
        Выйти
      </ExitButton>
    </PopUserContainer>
  );
}

export default PopUser;
