import React from 'react'
import cx from 'classnames'
import styles from './Header.module.scss'

export type HeaderProps = {
    title?: string
    className?: string
}

const defaultProps: HeaderProps = { title: 'The Todo App' }

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
    return (
        <header className={cx(styles.header, className)}>
            <section className={styles.title}>{title}</section>
        </header>
    )
}

Header.defaultProps = defaultProps
