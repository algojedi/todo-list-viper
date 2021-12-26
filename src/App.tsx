import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { InputTodo } from './components/input-todo/InputTodo';
import { TodoItemProps } from './components/todo-item/TodoItem';
import { TodoList } from './components/todos-list/TodoList';
import { addTodo, getTodos } from './db';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [textInput, setTextInput] = useState('')

  const refetchTodos = async () => {
    const newTodos = await getTodos()
    console.log('newTodos', newTodos)
    setTodos([...newTodos])
  }

  useEffect(() => {
    refetchTodos()
  }, [])

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => { setTextInput(e.target.value) }

  const handleClick = () => {
    if (textInput === '') return
    addTodo(textInput).then(() => { refetchTodos() })
    setTextInput('')
  }

  // const todoItems: TodoItemProps[] = todos.map((todo) => ({
  //     ...todo,
  //     title: todo.title,
  //   },
    // button: {
    //   ...defaultTodoItemProps.button,
    //   type: 'Icon',
    // }
  // }))

    // todoEntry: {
    //   ...defaultTodoEntryProps,
    //   input: {
    //     ...defaultTodoEntryProps.input,
    //     textValue: textInput,
    //     onTextChanged: handleChange
    //   },
    //   button: {
    //     ...defaultTodoEntryProps.button,
    //     onButtonClicked: handleClick
    //   }
    // } as TodoEntryProps

  
  return (
    <div className="App">
      <Header />
      <InputTodo />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
