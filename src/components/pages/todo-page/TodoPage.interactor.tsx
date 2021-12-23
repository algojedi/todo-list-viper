import React, { useEffect, useState } from 'react'
import { TodoPageProps } from '.'
import { getTodos } from '../../../db'
import { Todo } from '../../../types'
import { TodoPagePresenterProps } from './TodoPage.presenter'

const withInteractor = (
    Presenter: React.FC<TodoPagePresenterProps>
): React.FC<TodoPageProps> => {
    const Interactor: React.FC<TodoPageProps> = (props) => {
        const [todos, setTodos] = useState<Todo[]>([])

        const refetchTodos = async () => {
            const newTodos = await getTodos()
            console.log('newTodos', newTodos)
            setTodos([...newTodos])
        }
        
        useEffect(() => {
            refetchTodos()
        }, [])
        
        return (
            <Presenter {...props} refetchTodos={refetchTodos} todos={todos} />
        )
    }
    return Interactor
}
export default withInteractor
