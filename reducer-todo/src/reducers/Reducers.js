// NOTES FOR ME
// `reducer is a pure function with no side effects
// `reducer is a React Hook
// `reducers never change anything that lives outside of that function
// `reducers take in 2 objects and reduces them to a single object
// `reducers returns new object(state)
// `reducers help manage state with predictability

// `actions are objects with a required "type" property. Optional "payload"/data prop
// `actions describe to the reducer what event has occured and how to update state based on said event
// `actions get "sent" via a dispatch function

//@@ GIVE YOUR INTIAL STATE OBJECT AN ARRAY NAME LIKE  `todos` (SO THAT ITS EASIER TO REFERENCE IN YOUR REDUCER FUNCTION CASES)
// export const initialState = {
//   todos: [
//     {
//       item: 'Learn about reducers',
//       completed: false,
//       id: 3892987589,
//     },
//   ],
// };
export const initialState = {
    todos: [
        {
            item: "this is your first todo item",  
            completed: false, 
            id: 1, 
        },
        {
            item: "click on item to select it",  
            completed: false, 
            id: 2, 
        },
        {
            item: "item can now be deleted",  
            completed: false, 
            id: 3, 
        },
        {
            item: "now create your todo list",  
            completed: false, 
            id: 4, 
        }
    ],
};

//@@ i WOULD DO THE EXPORT FUNCTION BEFORE YOUR REDUCER HERE
export const reducer = (state, action) => { 

    switch(action.type) { 
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { item: action.text, id: Date.now(), completed: false },
                ],
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo =>
                  todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    !todo.completed
                    ),
            };
        
        default: 
            return state;
        }
    };

            //@@@ what you have above for 'ADD_ITEM' would work
            //@@ within the intial state above I would give the array a name such as:
            //@@ export const initialState = {
//  @@@ todos: [
//     {
//       item: 'Learn about reducers',
//       completed: false,
//       id: 3892987589,
//     },
//   ],
//};

//@@ so that you can implement a case that looks like:
// switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           { item: action.text, id: Date.now(), completed: false },
//         ],
//       };
//   case 'TOGGLE_COMPLETE':
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//         ),
//       };
//@@@ I'll let you figure out how to write the case for 'CLEAR_COMPLETED`
// //& Yes ALWAYS RETURN DEFAULT: RETURN STATE AT THE END OF YOUR REDUCER LIKE YOU DID
//         case "toggleTodoCompleted": {
//             const todo = state.todo.map(item => item.item === action.payload);
//             todo.completed = !todo.completed;
//             return;
//         }

//         default: //default to return the state untouched- must have a default in a switch statement
//                 return state;
//         }
// };

// export { initialState, reducer };