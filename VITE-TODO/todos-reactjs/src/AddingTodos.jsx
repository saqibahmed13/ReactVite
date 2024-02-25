import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddingTodos() {
  const [todos, setTodos] = useState([
    { newAddedTask: "sample ", id: uuidv4() }, // this is added task
  ]);
  const [newTask, setNewTask] = useState("");  // this is for adding a task

  let addingTask = () => {
    setTodos((prevArray) => {
      return [...prevArray, { newAddedTask: newTask, id: uuidv4() }];
    });
    setNewTask("");
  };

  let updateTodo = (evt) => {
    setNewTask(evt.target.value);
  };

  let deleteTask = (id) => {
    return setTodos((prevArray) =>
      todos.filter((prevArray) => prevArray.id != id)
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={updateTodo} // on change change hoti hi newTask ki value change hotiye
      />
      <button onClick={addingTask}>Add Task</button>
      <br />
      <br />
      <button>Added Tasks</button>
      {todos.map((todo) => {
        // for rendering we are using
        return (
          <li key={todo.id}>
            {todo.newAddedTask}
            <button onClick={ () => deleteTask(todo.id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}
