import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    // const [todos, setTodos] = useState(["newSample"]);
    const [todos, setTodos] = useState([{task:"newsample", id:uuidv4()}]);
    const [newTodoTask, setNewTodoTask] = useState("");

let newTask = ()=>{
setTodos([...todos, { task:newTodoTask, id:uuidv4() }]);
setNewTodoTask("");    // search should be empty after adding the task 

}

let updateTodo = (event)=>{
setNewTodoTask(event.target.value);    // target is input uski value

}

    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodoTask} onChange={updateTodo} />
            <button onClick={newTask}>Add</button>
            <br />
            <br />
            <br />

            <p>Task to do</p>
            <ul>
                {
                    todos.map((todo)=>{
                    return <li key={todo.id}>{todo.task}</li>
                    })
                }
            </ul>
        </div>
    );
}