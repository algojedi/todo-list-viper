import React from 'react'
import TodoPageBlock from '../../blocks/todo-page-block/TodoPageBlock'
import { TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import { TodoListProps } from '../../organisms/todos-list/TodoList'
import cx from 'classnames'
import styles from './TodoPage.module.scss'

export type TodoPageProps = {
    todoList?: TodoListProps
    todoEntry?: TodoEntryProps
    className?: string
}

export const defaultProps = {
    todoList: {} as TodoListProps
}

export const TodoPage: React.FC<TodoPageProps> = ({
    className,
    todoList,
    todoEntry
}) => {
    return (
        <TodoPageBlock
            className={cx(styles.todoPageBlock, className)}
            todoList={todoList}
            todoEntry={todoEntry}
        />
    )
}

TodoPage.defaultProps = defaultProps
