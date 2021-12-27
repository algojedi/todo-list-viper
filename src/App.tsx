import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, HeaderProps } from './components/header/Header';
import { InputTodo, InputTodoProps } from './components/input-todo/InputTodo';
import { TodoList, TodoListProps } from './components/todos-list/TodoList';
import { getTodos } from './db';
import { Todo } from './types';
import styles from './App.module.scss';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const refetchTodos = async () => {
    const newTodos = await getTodos();
    setTodos([...newTodos]);
  };

  useEffect(() => {
    refetchTodos();
  }, []);

  const headerProps: HeaderProps = {
    title: 'Todo List',
  };
  const todoListProps: TodoListProps = {
    todos: todos,
    refresh: refetchTodos,
  };
  const inputTodoProps: InputTodoProps = {
    refresh: refetchTodos,
  };

  return (
    <div className='App'>
      <Header className={styles.header} {...headerProps} />
      <InputTodo className={styles.inputTodo} {...inputTodoProps} />
      <TodoList className={styles.todoList} {...todoListProps} />
    </div>
  );
}

export default App;
