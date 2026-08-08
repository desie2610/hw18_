import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">Задач поки немає. Додайте першу!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}