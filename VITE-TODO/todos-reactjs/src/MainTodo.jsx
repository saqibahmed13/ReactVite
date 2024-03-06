import AddTodos from "./AddTodos";
import UpdateTodo from "./UpdateTodo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function MainTodo(){
    const [todos, setTodos] = useState([]);
    
      const addTask = (newTask) => {
        setTodos((prevArray) => [
          ...prevArray,
          { newAddedTask: newTask, id: uuidv4(), isDone: false },
        ]);
      };
    
      const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };
    
      return (
        <div>
          <AddTodos addTask={addTask} />
          <UpdateTodo todos={todos} deleteTask={deleteTask} />
        </div>
      );
    }