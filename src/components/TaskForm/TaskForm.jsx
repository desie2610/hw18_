import { useRef, useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = task.trim();

    if (!trimmedTask) {
      inputRef.current.focus();
      return;
    }

    addTask(trimmedTask);
    setTask("");

    inputRef.current.focus();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="task-form__input"
        type="text"
        placeholder="Введіть нову задачу..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button className="task-form__button" type="submit">
        Додати задачу
      </button>
    </form>
  );
}