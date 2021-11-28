import React, { useContext } from 'react'
import { Todo } from '../../../types'
import styles from './TodoItem.module.scss'
import Text from '../../atoms/text'
import cx from 'classnames'
import Button, { ButtonProps } from '../../atoms/button/Button'
import { IconAssetType } from '../../atoms/icon/Icon'

export type TodoItemProps = {
    className?: string;
    todo?: Todo
    icon? : IconAssetType;
    button? : ButtonProps;
}

export const defaultProps : TodoItemProps = {
    button: {
        icon: { asset: 'Delete' }
    },
    todo: {
        completed: false,
    }

}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, button, className }) => {
    // const { deleteTodo, toggleTodo } = useContext(TodoContext)
    let completed = todo?.completed ? '_completed' : ''
    const currentStyle = styles[`title${completed}`]
    console.log({ todo });

    return (
        <li className={cx(styles.todo, className)}>
            <Text className={currentStyle} {...todo?.title}/>
            <Text className={styles.date} {...todo?.date}></Text>
            <Button className={styles.button}
                {...button}/>
        </li>
    )
}

TodoItem.defaultProps = defaultProps
