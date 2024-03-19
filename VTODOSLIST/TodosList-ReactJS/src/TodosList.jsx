import AddingTodos from "./AddingTodos";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UpdateTheTodo from "./UpdateTheTodo";

export default function TodosList() {
  const [todos, setTodos] = useState([{ list: " ", key: uuidv4() }]); // for adding task

  let submitTodo = (task) => {
    console.log("Value submitted ", task);
    setTodos((prevValue) => {
      return [...prevValue, { list: task, key: uuidv4() }];
    });
  };

  const deleteTask = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <div>
      <AddingTodos addingTask={submitTodo} />
      <UpdateTheTodo todos={todos} deleteTask={deleteTask} />
    </div>
  );
}
