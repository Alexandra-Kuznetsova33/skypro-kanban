import Main from '../../components/Main/Main';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};

export default MainPage;