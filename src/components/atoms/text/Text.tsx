import React from 'react';
import cx from 'classnames';

import styles from './Text.module.scss';

export type TextTypeType = 'Default' | 'Title' | 'Button';
export type TextAlignType = 'Left' | 'Center' | 'Right';
export type TextStyleType = 'Default' | 'Grey' | 'Red' | 'Green' | 'Blue';

export const defaultProps = {
	type: 'Default' as TextTypeType,
	style: 'Default' as TextStyleType,
	value: '',
};

export type TextProps = {
	type?: TextTypeType;
	style?: TextStyleType;
	value?: string;
	onClick?: VoidFunction;
	className?: string;
};

const Text: React.FC<TextProps> = ({
	type,
	style,
	value,
	onClick,
	className,
}) => {

	const currentStyle = styles[`text${type}${style}`];

	return (
		<div className={cx(currentStyle, className)} onClick={onClick}>
			{value}
		</div>
	);
};

Text.defaultProps = defaultProps;

export default Text;
