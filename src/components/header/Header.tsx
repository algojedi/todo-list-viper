import React from 'react'
import './header.scss'

interface HeaderProps {
	title?: string;
}

const defaultProps : HeaderProps = { title: 'Oh, hi'}

export const Header: React.FC<HeaderProps> = ({ title }) => {
		return (
			<header className="header">{title}</header>
		);
}

Header.defaultProps = defaultProps