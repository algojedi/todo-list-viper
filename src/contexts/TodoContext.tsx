import React, { createContext, useState } from 'react';
import { Todo } from '../types';

export type TodoContextValue = {
  todos: Todo[];
  editTodo: (todo: Todo) => void;
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const initialTodoContext: TodoContextValue = {
  todos: [],
  editTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {}
}

const mockTodos: Todo[] = [
  {
    title: 'fertilize lawn',
    date: new Date().toDateString(),
    completed: false,
    id: 0
  },
  {
    title: 'purchase lottery ticket',
    date: new Date().toDateString(),
    completed: false,
    id: 1
  },
]

export const TodoContext = createContext<TodoContextValue>(initialTodoContext);

export const TodosProvider: React.FC<{}> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  let mockId = 2

  const editTodo = (editedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo.id !== editedTodo.id)
    newTodos.push(editedTodo)
    setTodos(newTodos)
  }

  const toggleTodo = (id: number) => {
    const newTodos = [ ...todos ]
    const todo = newTodos.find(todo => todo.id === id)
    if (!todo) return
    todo.completed = !todo.completed
    console.log({toggleTodo: todo})
    setTodos(newTodos)
  }

  const addTodo = (newTodo: string) => {
    const todo: Todo = {
      title: newTodo, id: mockId++,
      date: new Date().toDateString(),
      completed: false
    }
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{
      todos,
      editTodo,
      addTodo,
      deleteTodo,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
};