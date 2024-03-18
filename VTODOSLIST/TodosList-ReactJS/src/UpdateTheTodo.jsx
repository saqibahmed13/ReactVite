import DeleteTheTodo from "./DeleteTheTodo";

export default function UpdateTheTodo({todos, deleteTask}){
    return(
        <div>
            <ul>
        {/* for rendering  on screen map is used  */}
        {todos.map((todo) => {
          return <li key={todo.key}>{todo.list} 
          
          <DeleteTheTodo  id={todo.key}  deleteTask={deleteTask} /> </li>;
        })}
      </ul>
        </div>
    )
}