import { useState } from "react";


export const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("")
    return <div>
        <input type = "text" onChange={(e) => {
            setText(e.target.value)
        }} />
        <button onClick={ () => {
            addTodo(text)
        }} >
            Add ToDo</button>
    
    </div>
}