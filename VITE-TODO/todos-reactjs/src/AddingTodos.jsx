import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddingTodos() {
  const [todos, setTodos] = useState([
    { newAddedTask: "sample ", id: uuidv4() }, // this is added task
  ]);
  const [newTask, setNewTask] = useState(""); // this is for adding a task

  let addingTask = () => {
    setTodos((prevArray) => {
      return [
        ...prevArray,
        { newAddedTask: newTask, id: uuidv4(), isDone: false },
      ]; // new cloned array along with value and id
    });
    console.log("yeh task", newTask);
    setNewTask("");
  };

  let updateTodo = (evt) => {
    setNewTask(evt.target.value);
  };

  let deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));

    // both are same its good to give in the form of arrows

    // return setTodos((prevArray) =>
    //   todos.filter((prevArray) => prevArray.id != id)
    // );
  };

  let markAsDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllDone = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={updateTodo} // on change change hoti hi newTask ki value change hotiye
      />
      <br />
      <br />
      <button onClick={addingTask}>Add Task</button>
      <br />
      <br />
      <button>Added Tasks</button>
      {todos.map((todo) => {
        // for rendering we are using
        return (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.newAddedTask}
            </span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            {/* here we want to pass deleteTask along with the value but if we pass normally it will execute we can see in console
            thats why we are using arrow function with the help of arrow we can pass arguments hence we should write arrow functions */}
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        );
      })}
      <br />
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
