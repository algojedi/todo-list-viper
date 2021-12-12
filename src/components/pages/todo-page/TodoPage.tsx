import React from 'react'
import TodoPageBlock from '../../blocks/todo-page-block/TodoPageBlock'

export type TodoPageProps = { className?: string; }
export const TodoPage: React.FC<TodoPageProps> = ({ className }) => {
    return <TodoPageBlock />
}
