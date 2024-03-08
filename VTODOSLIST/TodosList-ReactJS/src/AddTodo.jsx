import { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState(""); //  for search box
  const [todos, setTodos] = useState([{}]); // for adding task

  let updateTodo = (evt) => {
    setTask(evt.target.value);
  };

  let submitTodo = () => {
    setTodos((prevValue) => {
      return [...prevValue, { task }];
    });
    setTask(" ");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todos"
        value={task}
        onChange={updateTodo}
      />
      <button onClick={submitTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}
