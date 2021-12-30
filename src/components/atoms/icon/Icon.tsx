import React from 'react';
import cx from 'classnames';
import styles from './Icon.module.scss';
import { ReactComponent as DeleteIcon } from '../../../resources/icons/delete.svg';
import { ReactComponent as PlusIcon } from '../../../resources/icons/plus.svg';

export type IconAssetType = 'Delete' | 'Add' 
export type IconStyleType = 'Default' | 'Green' | 'Blue' | 'Red'

export const defaultProps = {
	asset: 'Card' as IconAssetType,
	style: 'Default' as IconStyleType,
};

export type IconProps = {
	asset?: IconAssetType;
	style?: IconStyleType;
	className?: string;
	onClick?: VoidFunction;
}

	const Icon: React.FC<IconProps> = ({
		asset,
		style,
		className,
		onClick,
	}) => {

		const currentStyle = styles[`icon${asset}${style}`];

		let content
		
		switch (asset) {
			case 'Delete':
				content = <DeleteIcon title="Remove" />
				break;
			case 'Add':
				content = <PlusIcon title="Add"/>
				break;
			default:
				break;
		}

		return (
			<span className={cx(currentStyle, className)} onClick={onClick}>
				{content}
			</span>
		);
	};

Icon.defaultProps = defaultProps;

export default Icon;
