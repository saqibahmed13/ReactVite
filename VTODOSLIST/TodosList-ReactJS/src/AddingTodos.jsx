import { useState } from "react";

export default function AddingTodos({ addingTask }) {
  const [task, setTask] = useState(""); //  for search box

  let setTheTask = () => {
    addingTask(task);
    // addingTask is passed a prop jaise hi click hota [add task] the prop addingtask is triggered in main file uske ander submitTodo is there
    setTask(" ");
  };

  let updateTodo = (evt) => {
    setTask(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todos"
        value={task}
        onChange={updateTodo}
      />
      <button onClick={setTheTask}>Add Task</button>
    </div>
  );
}
