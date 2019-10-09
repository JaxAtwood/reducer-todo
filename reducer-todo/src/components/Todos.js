import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/Reducers";


function Todo() {
    const [state , dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setNewItem(event.target.value);
    };
    console.log(state);

    return (
        <div>
            <h1>{state.item}</h1>
            <form>
            <input 
                type="text"
                item="newItem"
                value={state.newItem}
                onChange={handleSubmit}
            />
            <button
                onSubmit={() => 
                    dispatch({ type: "ADD_ITEM", item: newItem})
                }>
                Add Item
            </button>
            </form>
        </div>
    );
}

export default Todo;

//dispatch function 
//calls reducer 
//in react, don't write this???
//write the reducer... dispatch actions when some event occurs
//happens under the hood- "black magic"

// const dispatch = action => {
//     if (typeof action !== 'object') throw new Error()
//     if (action.type === undefined) throw new Error()
//     currentState = reducer(currentState, action);
//   }