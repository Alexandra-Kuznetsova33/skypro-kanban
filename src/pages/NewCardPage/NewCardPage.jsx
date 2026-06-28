import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../../context/useTasks';
import PopNewCard from '../../components/PopNewCard/PopNewCard';

const NewCardPage = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleCreate = async (formData) => {
    const success = await addTask(formData);
    if (success) {
      navigate('/');
    } else {
      setError('Не удалось создать задачу');
    }
  };

  return (
      <PopNewCard 
        onClose={() => navigate('/')} 
        onCreate={handleCreate} 
        error={error} 
      />
  );
};

export default NewCardPage;