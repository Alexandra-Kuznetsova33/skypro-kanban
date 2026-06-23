import { useNavigate } from 'react-router-dom';
import PopExit from '../../components/PopExit/PopExit';

const ExitPage = () => {
  const navigate = useNavigate();
  return <PopExit onClose={() => navigate('/')} />;
};

export default ExitPage;