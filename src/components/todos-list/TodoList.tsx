import React, { useContext } from 'react'
import { Todo } from '../../types';
import { TodoItem } from '../todo-item/TodoItem';
import styles from './TodoList.module.scss'

type TodoListProps = {
	todos?: Todo[];
}

const defaultProps = { todos: [] }

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
	const listTodos = todos?.map( todo =>
			<TodoItem key={todo.id} todo={todo} />)
	return (
		<div>
			<ul className={styles.todos_list}>
				{listTodos}
			</ul>
		</div>)
}

TodoList.defaultProps = defaultProps

