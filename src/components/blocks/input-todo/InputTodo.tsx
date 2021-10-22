import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext'
import { TodoEntry, TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import styles from './InputTodo.module.scss'


export type InputTodoProps = {
	todoEntry?: TodoEntryProps
}

export const defaultProps: InputTodoProps = {
	todoEntry: {
		input: {
			textPlaceholder: 'Enter todo...',

		},
		button: {
			text: {
				value: 'Add'
			}
		}
	}
}

export const InputTodo: React.FC<InputTodoProps> = ({
	todoEntry,
}) => {
	const [input, setInput] = useState('')
	const { addTodo } = useContext(TodoContext)

	const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
		= e => {
			setInput(e.target.value)
		}

	const handleClick = () => {
		console.log('added?')
		if (input === '') return
		setInput('')
		addTodo(input)
	}

	const modifiedProps: TodoEntryProps = {
		input: {
			...todoEntry?.input, textValue: input,
			onTextChanged: handleChange
		},
		button: { ...todoEntry?.button, onButtonClicked: handleClick }
	}
	return (
		<section className={styles.container}>
			<TodoEntry {...modifiedProps} />
		</section>
	);
}

InputTodo.defaultProps = defaultProps