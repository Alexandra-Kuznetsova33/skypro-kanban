import { PopExitOverlay, PopExitBlock, PopExitTitle, PopExitFormGroup, ExitYesButton, ExitNoButton } from './PopExit.styled.js';

function PopExit() {
  return (
    <PopExitOverlay id="popExit" style={{ display: 'none' }}> {}
      <PopExitBlock>
        <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
        <PopExitFormGroup>
          <ExitYesButton id="exitYes">Да, выйти</ExitYesButton>
          <ExitNoButton id="exitNo">Нет, остаться</ExitNoButton>
        </PopExitFormGroup>
      </PopExitBlock>
    </PopExitOverlay>
  );
}

export default PopExit;
