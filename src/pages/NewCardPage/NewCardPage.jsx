import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../../context/useTasks';
import PopNewCard from '../../components/PopNewCard/PopNewCard';

const NewCardPage = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    const success = await addTask(formData);
    if (success) {
      toast.success('Задача создана!');
      navigate('/');
    } else {
      toast.error('Не удалось создать задачу');
    }
  };

  return <PopNewCard onClose={() => navigate('/')} onCreate={handleCreate} />;
};

export default NewCardPage;