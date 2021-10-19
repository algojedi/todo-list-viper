
import React from 'react';
import cx from 'classnames';
import styles from './TextInput.module.scss';
import { TextProps } from '../text/Text';

export type TextInputTypeType = 'Text' | 'Password' | 'Username'
export type TextInputStyleType = 'Default' | 'Grey' | 'Red'

export const defaultProps = {
	type: 'Default' as TextInputTypeType,
	style: 'Default' as TextInputStyleType,
	text: {
		align: 'Left',
		style: 'Grey',
	} as TextProps,
};

export type TextInputProps = {
	type?: TextInputTypeType;
	style?: TextInputStyleType;
	textValue?: string;
	textPlaceholder?: string;
	onTextChanged?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
	className?: string;
	text?: TextProps;
};

const TextInput: React.FC<TextInputProps> = ({
	type,
	style,
	textValue,
	textPlaceholder,
	onTextChanged,
	className,
	text
}) => {

	const currentStyle = styles[`textInput${type}${style}`];

	let textView;

	switch (type) {
		case 'Text':
			textView = (
				<input
					placeholder={textPlaceholder}
					value={textValue}
					onChange={onTextChanged}
					className={styles.text} />
			);
			break;

		/**  case 'Password':
		// 	textView = (
		<input ....
		*/
	}

	return (
		<div className={cx(currentStyle, className)}>
			{textView}
		</div>
	);
};

TextInput.defaultProps = defaultProps;

export default TextInput;