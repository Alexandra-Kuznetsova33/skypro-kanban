import { useNavigate } from 'react-router-dom';
import PopNewCard from '../../components/PopNewCard/PopNewCard';

const NewCardPage = () => {
  const navigate = useNavigate();
  return <PopNewCard onClose={() => navigate('/')} />;
};

export default NewCardPage;