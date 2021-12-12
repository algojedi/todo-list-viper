import React, { createContext, useRef, useState } from 'react'
import { Todo } from '../types'

export type TodoContextValue = {
    todos: Todo[]
    editTodo: (todo: Todo) => void
    addTodo: (title: string) => void
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const initialTodoContext: TodoContextValue = {
    todos: [],
    editTodo: () => {},
    addTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {}
}

const mockTodos: Todo[] = [
    {
        title: { value: 'fertilize lawn' },
        date: { value: new Date().toDateString() },
        completed: false,
        id: 0
    },
    {
        title: { value: 'purchase lottery ticket' },
        date: { value: new Date().toDateString() },
        completed: false,
        id: 1
    }
]

export const TodoContext = createContext<TodoContextValue>(initialTodoContext)

export const TodosProvider: React.FC<{}> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(mockTodos)
    const mockId = useRef(2)

    const editTodo = (editedTodo: Todo) => {
        const newTodos = todos.filter((todo) => todo.id !== editedTodo.id)
        newTodos.push(editedTodo)
        setTodos(newTodos)
    }

    const toggleTodo = (id: number) => {
        const newTodos = [...todos]
        const todo = newTodos.find((todo) => todo.id === id)
        if (!todo) return
        todo.completed = !todo.completed
        console.log({ toggleTodo: todo })
        setTodos(newTodos)
    }

    const addTodo = (newTodo: string) => {
        const todo: Todo = {
            title: { value: newTodo },
            id: mockId.current++,
            date: { value: new Date().toDateString() },
            completed: false
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                editTodo,
                addTodo,
                deleteTodo,
                toggleTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
