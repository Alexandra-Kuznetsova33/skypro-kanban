import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import { useAuth } from '../../context/useAuth';
import { useTheme } from '../../context/useTheme';
import {
  StyledHeader,
  HeaderBlock,
  Logo,
  Nav,
  BtnMainNew,
  UserLink,
} from './Header.styled.js';
import { Link } from 'react-router-dom';

function Header() {
  const { currentTheme } = useTheme();
  const logoSrc =
    currentTheme === 'dark' ? '/images/logo_dark.png' : '/images/logo.png';
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <StyledHeader>
      <div className='container'>
        <HeaderBlock>
          <Logo>
            <Link to='/'>
              <img src={logoSrc} alt='logo' />
            </Link>
          </Logo>
          <Nav>
            <BtnMainNew as={Link} to='/new-card'>
              Создать новую задачу
            </BtnMainNew>
            <UserLink onClick={() => setIsUserMenuOpen((prev) => !prev)}>
              {user?.name || 'Пользователь'}
            </UserLink>
            <PopUser isOpen={isUserMenuOpen} />
          </Nav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;
