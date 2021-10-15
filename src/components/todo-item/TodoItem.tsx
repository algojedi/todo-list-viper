import React, { useContext } from 'react'
import { Todo } from '../../types';
import styles from './TodoItem.module.scss'
import { ReactComponent as DeleteIcon } from './delete.svg';
import { TodoContext } from '../../contexts/TodoContext';
import cx from 'classnames'

export type TodoItemProps = {
	todo: Todo;
}

export const defaultProps = {}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { deleteTodo, toggleTodo } = useContext(TodoContext)

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
			<section onClick={handleTitleClick} className={currentStyle} >
				{todo.title}
			</section>
			<section className={styles.date}>{todo.date}</section>
			<button onClick={handleDelete} className={styles.button}>
				<DeleteIcon className={styles.icon} />
			</button>
		</li>

	);
}

TodoItem.defaultProps = defaultProps