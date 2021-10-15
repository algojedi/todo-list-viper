import React from 'react'
import styles from './Header.module.scss'

export type HeaderProps = {
	title?: string;
}

const defaultProps: HeaderProps = { title: 'Oh, hi' }

export const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className={styles.header}>
			<section className={styles.title}>
				{title}
			</section>
		</header>
	);
}

Header.defaultProps = defaultProps