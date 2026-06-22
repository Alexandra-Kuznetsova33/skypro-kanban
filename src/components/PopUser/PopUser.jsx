import { PopUserContainer, UserName, UserMail, ThemeToggle, ExitButton } from './PopUser.styled.js';

function PopUser({ isOpen }) {
  return (
    <PopUserContainer $isOpen={isOpen}>
      <UserName>Ivan Ivanov</UserName>
      <UserMail>ivan.ivanov@gmail.com</UserMail>
      <ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" />
      </ThemeToggle>
      <ExitButton>Выйти</ExitButton>
    </PopUserContainer>
  );
}

export default PopUser;