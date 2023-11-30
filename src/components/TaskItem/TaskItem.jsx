import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal";
import { TaskEdit } from "../TaskEdit/TaskEdit";
import Checkmark from "../../images/checkmark.svg?react";
import Pencil from "../../images/pencil.svg?react";
import Bin from "../../images/bin.svg?react";
import { toggleCompleted, deleteTask } from "../../redux/operations";

export const TaskItem = ({ task }) => {
  const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    
    const handleToggle = () => dispatch(toggleCompleted(task));
    
    const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <li className="item">
      <div className="item-wrap">
        <label className="label-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
          />
          <span className="span-checkbox">
            <Checkmark />
          </span>
        </label>
        <h2 className="item-text">{task.title}</h2>
        <ul className="list-btn">
          <li>
            <button type="button" onClick={() => setShowModal(true)}>
              <Pencil />
            </button>
          </li>
          <li>
            <button type="button" onClick={handleDelete}>
              <Bin />
            </button>
          </li>
        </ul>
      </div>
      {showModal && (
              <Modal children={<TaskEdit task={task} onSubmit={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
      )}
    </li>
  );
};
