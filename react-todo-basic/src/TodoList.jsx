import { useState } from "react"

export default function TodoList(){
    const [todos, setTodos] = useState(["newSample"]);

    return(
        <div>
            <input type="text" placeholder="add a task" />
            <button>Add</button>
            <br />
            <br />
            <br />
            
            <p>Task to do</p>
            <ul>
                {
                    todos.map((todo)=>{
                        <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    );
}