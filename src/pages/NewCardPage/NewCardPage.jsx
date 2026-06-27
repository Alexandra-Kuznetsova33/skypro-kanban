import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { createTask } from '../../services/kanban';
import PopNewCard from '../../components/PopNewCard/PopNewCard';

const NewCardPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleCreate = async (formData) => {
    if (!user) {
      setError('Не авторизован');
      return;
    }
    try {
      await createTask({ token: user.token, task: formData });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <PopNewCard 
        onClose={() => navigate('/')} 
        onCreate={handleCreate} 
        error={error} 
      />
    </>
  );
};

export default NewCardPage;