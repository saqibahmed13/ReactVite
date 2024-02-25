import AddingTodos from "./AddingTodos.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function DeletingTodos() {
  const [todos, setTodos] = useState([{ task: "newsample", id: uuidv4() }]); // yeh added wala task ka
  const [newTodoTask, setNewTodoTask] = useState(""); // yeh search box ka

  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  return (
    <div>
        <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => deleteTodoOne(todo.id)}>
            upperCase One
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
