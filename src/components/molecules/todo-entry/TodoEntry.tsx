import React from 'react'
import Button, { ButtonProps } from '../../atoms/button/Button';
import TextInput, { TextInputProps } from '../../atoms/text-input/TextInput';
import styles from './TodoEntry.module.scss'
import { defaultProps as textInputDefaultProps } from '../../atoms/text-input/TextInput'
import { defaultProps as buttonDefaultProps } from '../../atoms/button/Button'
import { IconProps } from '../../atoms/icon';

export type TodoEntryProps = {
	button?: ButtonProps;
	input?: TextInputProps;
}

export const defaultProps: TodoEntryProps = {
	input: {
		...textInputDefaultProps
	},
	button: {
		...buttonDefaultProps,
		size: 'Large',
		type: 'TextIcon',
		style: 'RightRounded',
		onButtonClicked: () => { console.log('button clicked!')},
		icon: {
			asset: 'Add',
			style: 'Default',
		} as IconProps,
	}
}
export const TodoEntry: React.FC<TodoEntryProps> = ({ 
	input,
	button
}) => {
	return (
		<>
			<TextInput className={styles.text_input} {...input}/>
			<Button className={styles.button} {...button} />
		</>
	);
}

TodoEntry.defaultProps = defaultProps

			// <input className={styles.todo_input} value={input}
			// 	onChange={(e) => setInput(e.target.value)} type="text" />
			// <button className={styles.submit_btn} onClick={handleClick}>Add Todo</button>