import { useSelector } from "react-redux"
import { selectTasks } from "../../redux/selectors";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = () => {
    const tasks = useSelector(selectTasks);
    return (
        <ul>
            {tasks.map(task => (
                <li>
                    <TaskItem task={task} />
                </li>
            ))}
</ul>
    )
}