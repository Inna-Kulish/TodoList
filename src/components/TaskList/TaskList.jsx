import { TaskItem } from '../TaskItem/TaskItem';

// Task list
export const TaskList = ({ tasks }) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
