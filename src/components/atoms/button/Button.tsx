import React from 'react';
import cx from 'classnames';
import Text, { TextProps } from '../text';
import Icon, { IconProps } from '../icon';
import styles from './Button.module.scss';

export type ButtonSizeType = 'Large' | 'Medium' | 'Small'
export type ButtonTypeType = 'TextIcon' | 'Text' | 'Icon'
export type ButtonStyleType = 'Square' | 'RightRounded' | 'Rounded'
export type ButtonFunctionType = 'button' | 'submit' | 'reset';

export const defaultProps = {
	size: 'Small' as ButtonSizeType,
	type: 'Text' as ButtonTypeType,
	style: 'Rounded' as ButtonStyleType,
	text: {
		type: 'Button',
		align: 'Center',
		style: 'Default',
	} as TextProps,
};

export type ButtonProps = {
	size?: ButtonSizeType;
	type?: ButtonTypeType;
	style?: ButtonStyleType;
	buttonType?: ButtonFunctionType;
	onButtonClicked?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	text?: TextProps;
	icon?: IconProps;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({
	size,
	type,
	style,
	buttonType,
	onButtonClicked,
	text,
	icon,
	className,
}) => {

	const currentStyle = styles[`button${size}${type}${style}`];
	let contentView;

	switch (type) {
		case 'TextIcon':
			contentView = (
				<div className={styles.content}>
					<Text
						className={styles.text}
						{...text} />
					<Icon
						className={styles.icon}
						{...icon} />
				</div>
			);
			break;
		case 'Text':
			contentView = (
				<div className={styles.content}>
					<Text
						className={styles.text}
						{...text} />
				</div>
			);
			break;
		case 'Icon':
			contentView = (
				<div className={styles.content}>
					<Icon
						className={styles.icon}
						{...icon} />
				</div>
			);
			break;
	}

	return (
		<button
			type={buttonType}
			onClick={onButtonClicked}
			className={cx(currentStyle, className)}>
			{contentView}
		</button>
	);
};

Button.defaultProps = defaultProps

export default Button
