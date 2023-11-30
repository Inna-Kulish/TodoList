import { useDispatch } from "react-redux";
import { editTitle } from "../../redux/operations";
import { useState } from "react";

export const TaskEdit = ({ task, onSubmit }) => {
    const { id, title } = task;
    const [taskTitle, setTaskTitle] = useState(title);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(editTitle({ id, taskTitle }))
        onSubmit();
    }

    return (
        <>
            <h1 className="edit-title">Edit</h1>
            <form className="edit-form" onSubmit={handleSubmit}>
            <label>
                <textarea type="text" value={taskTitle} onChange={handleChange}/>
            </label>
            <button type="submit">Edit</button>
        </form>
        </>
        
    )
}