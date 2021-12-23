import React from 'react'
import cx from 'classnames'
import styles from './Header.module.scss'
import Text, { TextProps } from '../../atoms/text'

export type HeaderProps = {
    title?: TextProps
    className?: string
}

export const defaultProps: HeaderProps = {
    title: { type: 'Title', style: 'Blue' }
}

export const Header: React.FC<HeaderProps> = ({ title, className }) => {
    return (
        <header className={cx(styles.header, className)}>
            <div className={styles.title}>
                <Text {...title} />
            </div>
        </header>
    )
}

Header.defaultProps = defaultProps
