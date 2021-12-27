import classNames from 'classnames';
import React, { useState } from 'react';
import { addTodo } from '../../db';
import styles from './InputTodo.module.scss';
import cx from 'classnames';

export type InputTodoProps = {
  className?: string;
  refresh?: () => void;
};

export const InputTodo: React.FC<InputTodoProps> = ({ className, refresh }) => {
  const [input, setInput] = useState('');
  const handleClick = () => {
    if (input === '') return;
    addTodo(input).then(() => {
      refresh && refresh();
    });
    setInput('');
  };
  return (
    <div className={cx(styles.container, className)}>
      <input
        className={styles.todo_input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
      />
      <button className={styles.submit_btn} onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};
