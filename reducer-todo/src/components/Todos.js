import React from "react";
import Todo from "./TodoComponent";

function TodoList(props) {
    const { id, toggleComplete, item, todos, completed } = props;
    console.log("RIGHT HERE", props);

    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
            ))}
            <p onClick={() => toggleComplete(id)}>{item}</p>
        </div>
    )
};

export default TodoList;

// @ since you can use the `useReducer` hook to give the entire App component access to
//your reducer (which manages all yours state) & these are nested in the App component,
// you don't necessarily have to have the `useReducer` in this component,
//instead you can just pass in props as the argument & destructure the methods (todos, toggleComplete)
//@ for the Todo component itself again you don't have to use `useReducer` hook since the parent component (App component)
//already has done this & can pass the reducer methods down to all its child components
//But you will want a Todo component that takes in props as an argument
//and you can deconstruct id, toggleComplete, item, completed as props, to get your Todo component to
//have the toggleComplete functionality
//something like:
//const Todo = props => {
//   const { id, toggleComplete, item, completed } = props;
//   return (
//     <li
//       onClick={() => toggleComplete(id)}
//     >
//       {item}
//     </li>
//   );
// };

// export default Todo;
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     setNewItem(event.target.value);
    // };
    // console.log(state);
    // return (
        // <div>
            {/* <h1>{state.item}</h1> */}
            {/* <form>
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
            </form> */}
        {/* </div> */}
    // );
// }
// export default Todo;
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