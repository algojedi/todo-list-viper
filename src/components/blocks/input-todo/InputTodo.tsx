import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext'
import { defaultProps as defaultButtonProps, ButtonProps } from '../../atoms/button/Button'
import { TodoEntry, TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import styles from './InputTodo.module.scss'
import { defaultProps as defaultIconProps } from '../../atoms/icon/Icon'

export type InputTodoProps = {
	todoEntry?: TodoEntryProps
}

export const defaultProps: InputTodoProps = {
	todoEntry: {
		input: {
			textPlaceholder: 'Enter todo...',
		},
		button: {
			...defaultButtonProps,
			text: {
				...defaultButtonProps.text,
				value: 'Add'
			},
			type: 'TextIcon',
			style: 'RightRounded',
			icon: {
				...defaultIconProps,
				asset: 'Add'
			}
		} as ButtonProps
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