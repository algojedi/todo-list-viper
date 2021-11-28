import React, { useContext, useState } from 'react'
import Button, { ButtonProps } from '../../atoms/button/Button';
import TextInput, { TextInputProps } from '../../atoms/text-input/TextInput';
import styles from './TodoEntry.module.scss'
import { defaultProps as textInputDefaultProps } from '../../atoms/text-input/TextInput'
import { defaultProps as buttonDefaultProps } from '../../atoms/button/Button'
import { defaultProps as iconDefaultProps } from '../../atoms/button/Button'
import { IconProps } from '../../atoms/icon';
import cx from 'classnames'
import { TodoContext } from '../../../contexts/TodoContext';

export type TodoEntryProps = {
	button?: ButtonProps;
	input?: TextInputProps;
	className?: string;
}


export const defaultProps: TodoEntryProps = {
	input: {
		...textInputDefaultProps,
			textPlaceholder: 'Enter todo...',
	},
	button: {
		...buttonDefaultProps,
		size: 'Large',
		type: 'TextIcon',
		style: 'RightRounded',
			text: {
				...buttonDefaultProps.text,
				value: 'Add'
			},
		onButtonClicked: () => { console.log('button clicked!')},
		icon: {
				...iconDefaultProps,
			asset: 'Add',
			style: 'Default',
		} as IconProps,
	}
}
export const TodoEntry: React.FC<TodoEntryProps> = ({ 
	input,
	button,
	className
}) => {
	const [textInput, setTextInput] = useState('')
	const { addTodo } = useContext(TodoContext)

	const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
		= e => {
			setTextInput(e.target.value)
		}

	const handleClick = () => {
		if (textInput === '') return
		addTodo(textInput)
		setTextInput('')
	}

	const modifiedProps: TodoEntryProps = {
		input: {
			...input, textValue: textInput,
			onTextChanged: handleChange
		},
		button: { ...button, onButtonClicked: handleClick }
	}
	// console.log({ modifiedProps })

	// TODO: todo_entry needs the styling for the container from 
	// the now deleted InputTodo.scss
	
	return (
		<div className={cx(className, styles.todo_entry)}>
			<TextInput className={styles.text_input} {...modifiedProps.input}/>
			<Button className={styles.button} {...modifiedProps.button} />
		</div>
	);
}

TodoEntry.defaultProps = defaultProps

			// <input className={styles.todo_input} value={input}
			// 	onChange={(e) => setInput(e.target.value)} type="text" />
			// <button className={styles.submit_btn} onClick={handleClick}>Add Todo</button>