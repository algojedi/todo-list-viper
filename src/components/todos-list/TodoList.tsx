import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext';
import { TodoItem } from '../todo-item/TodoItem';
import styles from './TodoList.module.scss'

type TodoListProps = {
}


export const TodoList: React.FC<TodoListProps> = () => {
	const { todos } = useContext(TodoContext)
	const listTodos = todos.map( todo =>
			<TodoItem key={todo.id} todo={todo} />)
	return (
		<section>
			<ul className={styles.todos_list}>
				{listTodos}
			</ul>
		</section>)
}

