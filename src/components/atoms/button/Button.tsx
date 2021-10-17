import React from 'react';
import 'classnames'

export type ButtonProps = {
	onClick : () => void;
	type: string;
	value: string;
}
export const Button: React.FC<ButtonProps> = ({
	onClick,
	type,
	value
}) => (
	<button>{value}</button>
);

export default Button;