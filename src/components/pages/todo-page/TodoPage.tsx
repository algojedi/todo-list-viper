import React from 'react'
import { TodoEntry } from '../../molecules/todo-entry/TodoEntry'
import { TodoList } from '../../organisms/todos-list/TodoList'

export type TodoPageProps = {
	className?: string;
}

    // const handleDelete = () => {
    //     if (todo)
    //     deleteTodo(todo.id)
    // }
    // const handleTitleClick = () => {
    //     if (todo)
    //     toggleTodo(todo?.id)
    // } text: onClick={handleTitleClick} 
export const TodoPage: React.FC<TodoPageProps> = ( { className }) => {
		return (
			<div className={className}> 
        <TodoEntry />
        <TodoList />
			</div>
		)
}