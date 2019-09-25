import React from 'react';
import './App.css';

// Components
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Jashele's To Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;