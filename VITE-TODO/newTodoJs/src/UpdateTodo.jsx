// UpdateTodo.js
import DeleteTodo from "./DeleteTodo";

export default function UpdateTodo({ todos, deleteTask }) {
    return (
      <div>
        <ul className="task-list">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="task-item">
                {todo.newAddedTask}
            <DeleteTodo  id={todo.id}  deleteTask = {deleteTask}/>
              </li>
            );
          })}
          <br />
        </ul>
      </div>
    );
  }
  