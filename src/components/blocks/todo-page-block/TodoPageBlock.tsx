import React, { useState } from 'react'
import { TodoEntry, TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import { TodoList, TodoListProps } from '../../organisms/todos-list/TodoList'
import styles from './TodoPageBlock.module.scss'
import { defaultProps as defaultTodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import { defaultProps as defaultTodoListProps } from '../../organisms/todos-list/TodoList'
import cx from 'classnames'
import { TodoItemProps } from '../../molecules/todo-item/TodoItem'
import { addTodo, deleteTodo, toggleTodo } from '../../../db'

export type TodoPageBlockProps = {
    className?: string
    todoEntry?: TodoEntryProps
    todoList?: TodoListProps
}

const defaultProps: TodoPageBlockProps = {
    todoList: {
        ...defaultTodoListProps
    },
    todoEntry: {
        ...defaultTodoEntryProps,
        input: {
            ...defaultTodoEntryProps.input
        },
        button: {
            ...defaultTodoEntryProps.button
        }
    }
}

export const TodoPageBlock: React.FC<TodoPageBlockProps> = ({
    className,
    todoEntry,
    todoList
}) => {

    return (
        <div className={cx(styles.todoPageBlock, className)}>
            <TodoEntry {...todoEntry} />
            <TodoList {...todoList} />
        </div>
    )
}

TodoPageBlock.defaultProps = defaultProps

export default TodoPageBlock
