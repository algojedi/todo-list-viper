import React from 'react'
import { InputTodo } from '../../blocks/input-todo/InputTodo'
import { TodoList } from '../../todos-list/TodoList'

export type TodoPageProps = {

}

export const TodoPage: React.FC<TodoPageProps> = () => {
		return (
			<> 
        <InputTodo />
        <TodoList />
			</>
		)
}