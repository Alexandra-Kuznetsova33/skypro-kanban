import { useParams, useNavigate } from 'react-router-dom';
import PopBrowse from '../../components/PopBrowse/PopBrowse';
import cardsData from '../../data';

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cardsData.find(c => c.id === parseInt(id));

  return (
    <PopBrowse
      card={card}
      onClose={() => navigate('/')}
    />
  );
};

export default CardPage;