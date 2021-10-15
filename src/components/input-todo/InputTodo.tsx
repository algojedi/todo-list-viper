import React, { useContext, useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import styles from './InputTodo.module.scss'


type InputTodoProps = {

}

export const InputTodo: React.FC<InputTodoProps> = () => {
	const [input, setInput] = useState('')
	const { addTodo } = useContext(TodoContext)
	const handleClick = () => {
		if (input === '') return
		addTodo(input)
		setInput('')
	}
	return (
		<section className={styles.container}>
				<input className={styles.todo_input} value={input}
					onChange={(e) => setInput(e.target.value)} type="text" />
				<button className={styles.submit_btn} onClick={handleClick}>Add Todo</button>
		</section>
	);
}