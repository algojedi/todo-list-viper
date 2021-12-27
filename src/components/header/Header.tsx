import React from 'react'
import styles from './Header.module.scss'
import cx from 'classnames'

export type HeaderProps = {
	title?: string;
	className?: string;
}

const defaultProps: HeaderProps = { title: '' }

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
	return (
		<header className={cx(className, styles.header)}>
			<div className={styles.title}>
				{title}
			</div>
		</header>
	);
}

Header.defaultProps = defaultProps