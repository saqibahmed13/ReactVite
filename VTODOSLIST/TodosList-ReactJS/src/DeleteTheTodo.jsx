export default function DeleteTheTodo({id,deleteTask}){
    return(
        <div>
            <button onClick={()=>deleteTask(id)}>Delete</button>
        </div>
    )
}