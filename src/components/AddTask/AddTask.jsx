import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { addTask } from '../../redux/operations';

// Form for adding new task
export const AddTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const value = form.elements.text.value.trim();

    // Warning if you try to add an empty task
    if (!value) {
      Notiflix.Notify.warning('Enter the task text.', { position: 'left-top' });
      return;
    }
    dispatch(addTask(value));

    form.reset();
  };

  return (
    <form className="form-add" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button className="btn" type="submit">
        Add task
      </button>
    </form>
  );
};
