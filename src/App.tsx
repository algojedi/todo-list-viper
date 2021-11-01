import React from 'react';
import './App.css';
import { Header } from './components/molecules/header/Header';
import { TodoPage } from './components/pages/todo-page/TodoPage';
import { TodosProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <Header />
      <TodosProvider>
        <TodoPage />
      </TodosProvider>
    </div>
  );
}

export default App;
