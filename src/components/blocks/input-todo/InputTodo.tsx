import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext'
import { defaultProps as defaultButtonProps, ButtonProps } from '../../atoms/button/Button'
import { TodoEntry, TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import styles from './InputTodo.module.scss'
import { defaultProps as defaultIconProps } from '../../atoms/icon/Icon'
import cx from 'classnames'

export type InputTodoProps = {
	todoEntry?: TodoEntryProps;
	className?: string;
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
	className
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

	// customizing TodoEntry to our liking... should be done in presenter
	const modifiedProps: TodoEntryProps = {
		input: {
			...todoEntry?.input, textValue: input,
			onTextChanged: handleChange
		},
		button: { ...todoEntry?.button, onButtonClicked: handleClick }
	}
	return (
		<section className={cx(styles.container, className)}>
			<TodoEntry {...modifiedProps} className={styles.todo_entry} />
		</section>
	);
}

InputTodo.defaultProps = defaultProps