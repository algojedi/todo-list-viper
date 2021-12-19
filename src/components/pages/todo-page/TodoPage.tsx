import React, { useState } from 'react'
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../../../db'
import { Todo } from '../../../types'
import TodoPageBlock from '../../blocks/todo-page-block/TodoPageBlock'
import {
    TodoEntryProps,
    defaultProps as defaultTodoEntryProps
} from '../../molecules/todo-entry/TodoEntry'
import {
    TodoItemProps,
    defaultProps as defaultTodoItemProps
} from '../../molecules/todo-item/TodoItem'
import { TodoListProps } from '../../organisms/todos-list/TodoList'

export type TodoPageProps = { className?: string }
export const TodoPage: React.FC<TodoPageProps> = ({ className }) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [textInput, setTextInput] = useState('')

    React.useEffect(() => {
        const doGetTodos = async () => {
            const result = await getTodos()
            setTodos(result)
        }
        doGetTodos()
    }, [])

    const refetchTodos = async () => {
        const result = await getTodos()
        setTodos([...result]) // need to spread because of faux backend
    }

    const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
        e
    ) => {
        setTextInput(e.target.value)
    }

    const handleClick = () => {
        if (textInput === '') return
        addTodo(textInput)
        setTextInput('')
        refetchTodos()
    }

    const todoEntry = {
        ...defaultTodoEntryProps,
        input: {
            ...defaultTodoEntryProps.input,
            textValue: textInput,
            onTextChanged: handleChange
        },
        button: {
            ...defaultTodoEntryProps.button,
            onButtonClicked: handleClick
        }
    } as TodoEntryProps

    const todoItems: TodoItemProps[] = todos.map((todo) => ({
        todo: {
            ...todo,
            title: {
                ...todo.title,
                onClick: () => {
                    toggleTodo(todo.id!)
                    refetchTodos()
                }
            }
        },
        button: {
            ...defaultTodoItemProps.button,
            type: 'Icon',
            onButtonClicked: () => {
                deleteTodo(todo.id!)
                refetchTodos()
            }
        }
    }))

    const todoList = {
        todoItems
    } as TodoListProps

    return <TodoPageBlock todoList={todoList} todoEntry={todoEntry} />
}
