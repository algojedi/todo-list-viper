import React, { useState } from 'react'
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../../../db'
import { Todo } from '../../../types'
import TodoPageBlock from '../../blocks/todo-page-block/TodoPageBlock'
import { TodoEntryProps } from '../../molecules/todo-entry/TodoEntry'
import {
    TodoItemProps,
    defaultProps as defaultTodoItemProps
} from '../../molecules/todo-item/TodoItem'
import { TodoListProps } from '../../organisms/todos-list/TodoList'

export type TodoPageProps = {
    todoList?: TodoListProps
    todoEntry?: TodoEntryProps
    className?: string
}

export const defaultProps = {
    todoList: {} as TodoListProps
}

export const TodoPage: React.FC<TodoPageProps> = ({
    className,
    todoList,
    todoEntry
}) => {
    console.log( { todoList, todoEntry } )
    return <TodoPageBlock todoList={todoList} todoEntry={todoEntry} />
}

TodoPage.defaultProps = defaultProps
