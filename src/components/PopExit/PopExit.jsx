import { PopExitOverlay, PopExitBlock, PopExitTitle, PopExitFormGroup, ExitYesButton, ExitNoButton } from './PopExit.styled.js';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function PopExit({ onClose }) {

  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    navigate('/login');
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  return (
    <PopExitOverlay> 
      <PopExitBlock>
        <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
        <PopExitFormGroup>
          <ExitYesButton type="button" onClick={handleExit}>Да, выйти</ExitYesButton>
          <ExitNoButton type="button" onClick={handleClose}>Нет, остаться</ExitNoButton>
        </PopExitFormGroup>
      </PopExitBlock>
    </PopExitOverlay>
  );
}

export default PopExit;
