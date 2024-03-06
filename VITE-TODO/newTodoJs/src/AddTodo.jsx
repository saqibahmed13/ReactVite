// AddTodos.js
import { useState } from "react";

export default function AddTodo({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const addingTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  const updateTodo = (evt) => {
    setNewTask(evt.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={updateTodo}
      />
      <br />
      <br />
      <button onClick={addingTask}>Add Task</button>
      <br />
      <br />
      <button>Added Tasks</button>
    </div>
  );
}
