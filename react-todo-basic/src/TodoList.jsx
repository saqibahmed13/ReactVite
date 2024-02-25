import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // this is for keys

export default function TodoList() {
  // const [todos, setTodos] = useState(["newSample"]);
  const [todos, setTodos] = useState([{ task: "newsample", id: uuidv4() }]); // yeh added wala task ka
  const [newTodoTask, setNewTodoTask] = useState(""); // yeh search box ka

  let newTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodoTask, id: uuidv4() }];
    });
    setNewTodoTask(" ");

    // search should be empty after adding the task
  };

  let updateTodo = (event) => {
    setNewTodoTask(event.target.value); // target is input uski value
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCase = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let deleteTodoOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo; // kisa tha wisach return honde
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodoTask}
        onChange={updateTodo}
      />
      <button onClick={newTask}>Add</button>
      <br />
      <br />
      <br />
      <p>Task to do</p>
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
      <br />
      <button onClick={upperCase}> Upper Case </button>
    </div>
  );
}
