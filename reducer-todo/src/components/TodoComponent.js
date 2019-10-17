import React from "react";

const Todo = (props) => {
    const { id, toggleComplete, item, completed } = props;
    console.log(completed);
    return (
        <li onClick={() => toggleComplete(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {item} {console.log(item)}
        </li>
    )
}

export default Todo;