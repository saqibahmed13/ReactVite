export default function UpdateTheTodo({todos}){
    return(
        <div>
            <ul>
        {/* for rendering  on screen map is used  */}
        {todos.map((todo) => {
          return <li key={todo.key}>{todo.list}</li>;
        })}
      </ul>
        </div>
    )
}