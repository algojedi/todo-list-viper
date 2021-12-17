import React, { useState } from 'react'
import { addTodo, getTodos } from '../../../db'
import { Todo } from '../../../types'
import TodoPageBlock from '../../blocks/todo-page-block/TodoPageBlock'
import {
    TodoEntryProps,
    defaultProps as defaultTodoEntryProps
} from '../../molecules/todo-entry/TodoEntry'
import { TodoItemProps, defaultProps as defaultTodoItemProps } from '../../molecules/todo-item/TodoItem'
import { TodoListProps } from '../../organisms/todos-list/TodoList'

export type TodoPageProps = { className?: string }
export const TodoPage: React.FC<TodoPageProps> = ({ className }) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [textInput, setTextInput] = useState('')

    const doGetTodos = React.useCallback(async () => {
        try {
            const result = await getTodos()
            setTodos(result)
        } catch (error) {
            console.log(error)
        }
    }, [])

    React.useEffect(() => {
        doGetTodos()
    }, [doGetTodos])

    const refetchTodos = async () => {
        await doGetTodos()
        console.log('refetchTodos')
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

    const modifyTodos = todos.map(
        (todo) =>
            ({
                todo : {
                    ...todo,
                    title: {
                        ...todo.title,
                        onClick: () => {
                            console.log('title clicked from page')
                        }
                    }
                } as Todo,
                button: {
                    ...defaultTodoItemProps.button,
                    onButtonClicked: () => {
                        console.log('delete button clicked from page')
                    },
                },
                
            } as TodoItemProps )
    )
    const todoList = {
        todoItems: modifyTodos // TODO: these badboys need click handlers in TodoList component
    } as TodoListProps

    return <TodoPageBlock todoList={todoList} todoEntry={todoEntry} />
}
