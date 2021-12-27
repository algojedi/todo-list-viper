import React, { useContext } from 'react';
import { Todo } from '../../types';
import styles from './TodoItem.module.scss';
import { ReactComponent as DeleteIcon } from './delete.svg';
import { deleteTodo, toggleTodo } from '../../db';
import cx from 'classnames';

export type TodoItemProps = {
  todo?: Todo;
  refresh?: () => void;
  className?: string;
};

export const defaultProps = {};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  refresh,
  className,
}) => {
  let completed = todo?.completed ? '_completed' : '';
  const currentStyle = styles[`title${completed}`];

  const handleDelete = () => {
    todo && deleteTodo(todo.id).then(() => {
      refresh && refresh();
    });
  };
  const handleTitleClick = () => {
    todo && toggleTodo(todo.id).then(() => {
      refresh && refresh();
    });
  };

  return (
    <li className={cx(styles.todo, className)}>
      <div onClick={handleTitleClick} className={currentStyle}>
        {todo?.title}
      </div>
      <div className={styles.date}>{todo?.date}</div>
      <button onClick={handleDelete} className={styles.button}>
        <DeleteIcon className={styles.icon} />
      </button>
    </li>
  );
};

TodoItem.defaultProps = defaultProps;
