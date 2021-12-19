import React from 'react'
import cx from 'classnames'
import styles from './Header.module.scss'
import { TextProps } from '../../atoms/text/Text'

export type HeaderProps = {
    title?: TextProps
    className?: string
}

export const defaultProps: HeaderProps = { title: { type: 'Title', style: 'Blue' } }

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
    return (
        <header className={cx(styles.header, className)}>
            <section className={styles.title}>{title}</section>
        </header>
    )
}

Header.defaultProps = defaultProps
