import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

export const AddTask = () => {
    const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
    
    return (
        <form className="form-add" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
    )
}