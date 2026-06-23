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
import { Link } from 'react-router-dom';

function Header() {
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
            <BtnMainNew as={Link} to="/new-card">
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
