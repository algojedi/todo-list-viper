import React from 'react';
import './App.css';
import { Header } from './components/molecules/header/Header';
import { TodoPage } from './components/pages/todo-page/TodoPage';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoPage />
    </div>
  );
}

export default App;
