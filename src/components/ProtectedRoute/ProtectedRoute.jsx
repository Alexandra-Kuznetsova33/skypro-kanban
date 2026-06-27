import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import ProtectedLayout from '../ProtectedLayout/ProtectedLayout';

const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <ProtectedLayout /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
