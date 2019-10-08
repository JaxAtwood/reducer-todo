import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/Reducers";


const Todo = () => {
    const [state , dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState("");


    const handleChanges = event => {
        setNewItem(event.target.value);
    };

    const submitList = event => {
        event.preventDefault();
        //this.props.addList(this.state.item);
        // addList(state.item);
        // ????????????????????????????????
    };

    return (
        <div>
            <h1>{state.item}</h1>
            {/* <form> */}
            <form onSubmit = {submitList}>
            <input 
                type="text"
                item="newItem"
                value={newItem}
                onChange={handleChanges}
                // addList={item}
            />
            <button
                onClick={() => 
                    dispatch({ type: "ADD_ITEM", payload: newItem})
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

/*
export const reducer = function reducer(state, action) {
    console.log("action payload", action.payload);
    console.log("action type", action.type);
 
    switch (action.type) {
       case 'ADD_NEW_ITEM':
          const newItem = {
            item: action.payload,
            id: Date.now(),
            completed: false
          };
          return [...state, newItem];
       
       case 'TOGGLE_EDIT':
          state.map(item => {
             if (item.id === action.payload) {
                console.log("item found");
                return {
                   ...item,
                   completed: !item.completed
                };
             } else {
                return item;
             }
             });
             
          
      default:
        return state
    }
  }
  */