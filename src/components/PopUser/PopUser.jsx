import { useAuth } from '../../context/useAuth';
import { useTheme } from '../../context/useTheme';
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
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <PopUserContainer $isOpen={isOpen}>
      <UserName>{user.name || 'Пользователь'}</UserName>
      <UserMail>{user.login || 'email@example.com'}</UserMail>
      <ThemeToggle>
        <p>Темная тема</p>
        <input
          type='checkbox'
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
        />
      </ThemeToggle>
      <ExitButton as={Link} to='/exit'>
        Выйти
      </ExitButton>
    </PopUserContainer>
  );
}

export default PopUser;
