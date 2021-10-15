import React, { useState } from 'react'
import styles from './InputTodo.module.scss'


interface InputTodoProps {

}

export const InputTodo: React.FC<InputTodoProps> = ({ }) => {
	const [input, setInput] = useState('')
	const handleClick = () => {
		console.log({ input })
		setInput('')
	}
	return (
		<section className={styles.container}>
			<section>
				<input className={styles.todo_input} value={input}
					onChange={(e) => setInput(e.target.value)} type="text" />
			</section>
			<section>
				<button className={styles.submit_btn} onClick={handleClick}>Add Todo</button>
			</section>
		</section>
	);
}