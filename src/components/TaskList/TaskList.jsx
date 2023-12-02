import { useSelector } from "react-redux"
import { selectTasks, selectVisibleTasks } from "../../redux/selectors";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({tasks}) => {
    // const tasks = useSelector(selectTasks);
    //  const filteredTasks = useSelector(selectVisibleTasks);

    return (
        <ul className="tasks">
            {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
            ))}
</ul>
    )
}