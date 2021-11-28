import classNames from 'classnames'
import React, { useContext } from 'react'
import { TodoContext } from '../../../contexts/TodoContext'
import { TodoItem, TodoItemProps } from '../../molecules/todo-item/TodoItem'
import styles from './TodoList.module.scss'
import cx from 'classnames';

type TodoListProps = { className?: string; todos?: TodoItemProps[]; }

export const defaultProps : TodoListProps = { todos: [] }

export const TodoList: React.FC<TodoListProps> = ( { className, todos }) => {
    const listTodos = todos?.map((todoItem) => ( 
        <TodoItem key={todoItem.todo?.id} {...todoItem} />
    ))
    return (
        <section className={cx(styles.todoList, className) }>
            <ul className={styles.todos_list}>{listTodos}</ul>
        </section>
    )
}

TodoList.defaultProps = defaultProps
