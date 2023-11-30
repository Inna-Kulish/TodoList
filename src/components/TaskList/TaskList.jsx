import { useSelector } from "react-redux"
import { selectTasks } from "../../redux/selectors";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = () => {
    const tasks = useSelector(selectTasks);

    return (
        <ul className="tasks">
            {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
            ))}
</ul>
    )
}