import React from 'react'
import { TodoItem, TodoItemProps, defaultProps as defaultTodoItemProps } from '../../molecules/todo-item/TodoItem'
import styles from './TodoList.module.scss'
import cx from 'classnames'

export type TodoListProps = { className?: string; todoItems?: TodoItemProps[] }

export const defaultProps: TodoListProps = { todoItems: [] }

export const TodoList: React.FC<TodoListProps> = ({ className, todoItems }) => {

    const listTodosView = todoItems?.map((todoItem) => {
        return <TodoItem key={todoItem.todo?.id} {...todoItem} />
    })

    return (
        <section className={cx(styles.todoList, className)}>
            <ul className={styles.todos_list}>{listTodosView}</ul>
        </section>
    )
}

TodoList.defaultProps = defaultProps
