import { useDispatch } from 'react-redux';
import { editTitle } from '../../redux/operations';
import { useState } from 'react';

// Form for edit text of task
export const TaskEdit = ({ task, onSubmit }) => {
  const { id, title } = task;
  const [taskTitle, setTaskTitle] = useState(title);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      setTaskTitle(title);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editTitle({ id, taskTitle }));
    onSubmit();
  };

  return (
    <>
      <h1 className="edit-title">Edit task</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>
          <textarea
            type="text"
            rows="5"
            value={taskTitle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <button className="btn" type="submit">
          Edit
        </button>
      </form>
    </>
  );
};
