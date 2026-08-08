import "./TaskItem.css";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="task-item__content">
        <input
          className="task-item__checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <p className={`task-item__text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </p>
      </div>

      <button
        className="task-item__delete"
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        Видлити
      </button>
    </li>
  );
}