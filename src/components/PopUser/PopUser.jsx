import {
  PopUserContainer,
  UserName,
  UserMail,
  ThemeToggle,
  ExitButton,
} from './PopUser.styled.js';
import { Link } from 'react-router-dom';

function PopUser({ isOpen }) {
  return (
    <PopUserContainer $isOpen={isOpen}>
      <UserName>Ivan Ivanov</UserName>
      <UserMail>ivan.ivanov@gmail.com</UserMail>
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
