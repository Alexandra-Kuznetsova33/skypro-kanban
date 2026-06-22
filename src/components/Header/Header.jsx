import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import {
  StyledHeader,
  HeaderBlock,
  Logo,
  Nav,
  BtnMainNew,
  UserLink,
} from "./Header.styled.js";

function Header({ onNewCard }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <Logo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </Logo>
          <Nav>
            <BtnMainNew id="btnMainNew" onClick={onNewCard}>
              Создать новую задачу
            </BtnMainNew>
            <UserLink onClick={() => setIsUserMenuOpen((prev) => !prev)}>
              Ivan Ivanov
            </UserLink>
            <PopUser isOpen={isUserMenuOpen} />
          </Nav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;
