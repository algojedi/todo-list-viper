import React, { useContext } from 'react'
import { Todo } from '../../types';
import styles from './TodoItem.module.scss'
import { ReactComponent as DeleteIcon } from './delete.svg';
import { deleteTodo, toggleTodo } from '../../db';
// import cx from 'classnames'

export type TodoItemProps = {
	todo: Todo;
}

export const defaultProps = {}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

	let completed = todo.completed ? '_completed' : ''
	const currentStyle = styles[`title${completed}`];

	const handleDelete= () => {
		deleteTodo(todo.id)
	}
	const handleTitleClick= () => {
		toggleTodo(todo.id)
	}

	return (
		<li className={styles.todo}>
			<div onClick={handleTitleClick} className={currentStyle} >
				{todo.title}
			</div>
			<div className={styles.date}>{todo.date}</div>
			<button onClick={handleDelete} className={styles.button}>
				<DeleteIcon className={styles.icon} />
			</button>
		</li>

	);
}

TodoItem.defaultProps = defaultProps