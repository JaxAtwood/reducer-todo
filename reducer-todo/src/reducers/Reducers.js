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


const initialState = { //setting the intialState object with specific properties
    // thing: ""
    item: "example item", //item property with empty string
    // completed: false, //completed property with a boolean value
    // id: null, //id property with empty string
};


// basic reducer / takes in a state object / takes in an action object / basic switch that returns our state
// kind of the "key to the ignition" in beginning reducers
// returns new state object
const reducer = (state, action) => { //taking state and action => reduces to: 
    // console.log(reducer);
    switch(action.type) { //switch statement: similar to if/else if (cleaner/dryer); takes cases/returns
        case "ADD_ITEM":
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state.item, newItem
        };

        case "TOGGLE_EDIT":
                    state.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })          
            default: //default to return the state untouched- must have a default in a switch statement
                return state; 
        }
    
};

export { initialState, reducer }; 