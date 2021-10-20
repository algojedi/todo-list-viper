import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext'
import { TodoEntry, TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import styles from './InputTodo.module.scss'


export type InputTodoProps = {
	todoEntry? : TodoEntryProps
}

export const defaultProps: InputTodoProps = {
	todoEntry : {

	}
}

export const InputTodo: React.FC<InputTodoProps> = (
	todoEntry,

) => {
	const [input, setInput] = useState('')
	const { addTodo } = useContext(TodoContext)
	const handleClick = () => {
		if (input === '') return
		addTodo(input)
		setInput('')
	}
	return (
		<section className={styles.container}>
			<TodoEntry {...todoEntry} />
		</section>
	);
}