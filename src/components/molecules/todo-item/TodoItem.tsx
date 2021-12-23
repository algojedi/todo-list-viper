import React from 'react'
import { Todo } from '../../../types'
import styles from './TodoItem.module.scss'
import Text from '../../atoms/text'
import cx from 'classnames'
import Button, { ButtonProps } from '../../atoms/button/Button'

export type TodoItemProps = {
    className?: string
    todo?: Todo
    button?: ButtonProps
    id?: number
}

export const defaultProps: TodoItemProps = {
    button: {
        type: 'TextIcon',
        icon: { asset: 'Delete' }
    },
    todo: {
        completed: false
    }
}

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    button,
    className
}) => {
    let completed = todo?.completed ? '_completed' : ''
    const currentStyle = styles[`title${completed}`]
    return (
        <li className={cx(styles.todo, className)}>
            <Text className={currentStyle} {...todo?.title} />
            <Text className={styles.date} {...todo?.date}></Text>
            <Button className={styles.button} {...button} />
        </li>
    )
}

TodoItem.defaultProps = defaultProps
