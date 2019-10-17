import React, { useReducer } from 'react';
import TodoList from "./components/Todos";
import './App.css';
import { reducer, initialState } from "./reducers/Reducers"; 
import TodoForm from "./components/TodoForm";

const App = () => {
  const [item, dispatch] = useReducer(reducer, initialState);
  console.log("a string", item);

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", text: item }) 
  };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", id: id})
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED"})
  };

  return (
    <div className="App">
      <h1>REACT REDUCER TODO</h1>
      <TodoList addTodo={addTodo} 
        toggleComplete={toggleComplete}
        clearCompleted={clearCompleted}
        todos={item.todos}
      /> 
      
      <TodoForm  addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;