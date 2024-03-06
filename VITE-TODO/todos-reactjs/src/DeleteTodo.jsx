// DeleteTodo.js
export default function DeleteTodo({ id, deleteTask }) {
    return (
      <div>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    );
  }
  