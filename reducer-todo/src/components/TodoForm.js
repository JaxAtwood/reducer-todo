import React, { useState } from "react";
// import Todos from "./Todos";

const TodoForm = (props) => {

    // const [item, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
        props.addTodo(input)
      setInput("");
    };

    const clearCompleted = event => {
        event.preventDefault();
            props.clearCompleted()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    // addTodo={addTodo}
                    onChange={event => setInput(event.target.value)}
                />
            {/* <button onClick={() => dispatch({type: "ADD_ITEM"})}>Add Item</button> */}
            <button>Add Item</button>
            <button onClick={clearCompleted}>Clear Selected</button>
            </form>
        </div>
    );
}


export default TodoForm;

//@ you'll also want a TodoForm which has 2 methods (a handleSubmit that takes in the input of search bar & uses the
// addTodo, as well as a handleClear that uses the clearCompleted methods you created in the App.js file)