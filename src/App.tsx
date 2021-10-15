import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { InputTodo } from './components/input-todo/InputTodo';
import { TodoList } from './components/todos-list/TodoList';
import { TodosProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <Header />
      <InputTodo />
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
