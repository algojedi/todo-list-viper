import React from 'react'
import { Todo } from '../../types';

export type TodoItemProps = {
	todo: Todo;
}

export const defaultProps = {}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
		
		return (
			<li className="todo">
				<section className="todo_title">{ todo.title }</section>
				<section className="todo_date">{ todo.date }</section>
			</li>

		);
}

TodoItem.defaultProps = defaultProps