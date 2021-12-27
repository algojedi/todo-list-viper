import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, HeaderProps } from './components/header/Header';
import styles from './App.module.scss';
import { InputTodo, InputTodoProps } from './components/input-todo/InputTodo';
import { TodoList, TodoListProps } from './components/todos-list/TodoList';
import { getTodos } from './db';
import { Todo } from './types';

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
      <Header {...headerProps} className={styles.header} />
      <InputTodo className={styles.inputTodo} {...inputTodoProps} />
      <TodoList className={styles.todoList} {...todoListProps} />
    </div>
  );
}

export default App;
