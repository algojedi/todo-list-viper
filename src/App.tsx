import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { InputTodo } from './components/input-todo/InputTodo';
import { TodoList } from './components/todos-list/TodoList';

function App() {
  
  return (
    <div className="App">





      <Header />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
