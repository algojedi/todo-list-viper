import React, { useEffect, useState } from 'react'
import { TodoPageProps } from '.'
import { addTodo, deleteTodo, toggleTodo } from '../../../db'
import { Todo } from '../../../types'
import {
    TodoEntryProps,
    defaultProps as defaultTodoEntryProps
} from '../../molecules/todo-entry/TodoEntry'
import {
    TodoItemProps,
    defaultProps as defaultTodoItemProps
} from '../../molecules/todo-item/TodoItem'
import { TodoListProps } from '../../organisms/todos-list/TodoList'

export type TodoPagePresenterProps = TodoPageProps & {
    todos: Todo[]
    refetchTodos: () => void
}

const withPresenter = (
    View: React.FC<TodoPageProps>
): React.FC<TodoPagePresenterProps> => {
    const Presenter: React.FC<TodoPagePresenterProps> = (props) => {
        const { todos, refetchTodos } = props
        const [textInput, setTextInput] = useState('')

        const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
            e
        ) => {
            setTextInput(e.target.value)
        }

        const handleClick = () => {
            if (textInput === '') return
            addTodo(textInput).then(() => {
                refetchTodos()
            })
            setTextInput('')
        }

        const todoItems: TodoItemProps[] = todos.map((todo) => ({
            todo: {
                ...todo,
                title: {
                    ...todo.title,
                    onClick: () => {
                        toggleTodo(todo.id!)?.then(() => {
                            refetchTodos()
                        })
                    }
                }
            },
            button: {
                ...defaultTodoItemProps.button,
                type: 'Icon',
                onButtonClicked: () => {
                    deleteTodo(todo.id!).then(() => {
                        refetchTodos()
                    })
                }
            }
        }))

        const blockProps = {
            todoList: {
                todoItems
            } as TodoListProps,
            todoEntry: {
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
        }
        console.log({ blockProps })
        return <View {...props} {...blockProps} />
    }
    return Presenter
}

export default withPresenter
