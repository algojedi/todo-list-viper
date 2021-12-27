import React from 'react'
import { Todo } from '../../types';
import { TodoItem } from '../todo-item/TodoItem';
import styles from './TodoList.module.scss'
import cx from 'classnames'

export type TodoListProps = {
	todos?: Todo[];
	refresh?: () => void;
	className?: string;
}

const defaultProps = { todos: [] }

export const TodoList: React.FC<TodoListProps> = ({ className, refresh, todos }) => {
	const listTodos = todos?.map( todo =>
			<TodoItem key={todo.id} todo={todo} refresh={refresh} />)
	return (
		<div className={styles.todoListContainer}>
			<ul className={cx(styles.todoList, className)}>
				{listTodos}
			</ul>
		</div>)
}

TodoList.defaultProps = defaultProps

