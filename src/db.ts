import { Todo } from './types'

let mockId = 0

let mockTodos: Todo[] = [
    {
        title: { value: 'fertilize lawn' },
        date: { value: new Date().toDateString() },
        completed: false,
        id: mockId++
    },
    {
        title: { value: 'purchase lottery ticket' },
        date: { value: new Date().toDateString() },
        completed: false,
        id: mockId++
    }
]

export const getTodos = () : Promise<Todo[]> =>
    new Promise((resolve, reject) => {
        resolve(mockTodos)
    })

export const toggleTodo = (id: number) => {
    const todo = mockTodos.find((todo) => todo.id === id)
    if (!todo) return
    todo.completed = !todo.completed
}

export const addTodo = (newTodo: string) => {
    const todo: Todo = {
        title: { value: newTodo },
        id: mockId++,
        date: { value: new Date().toDateString() },
        completed: false
    }
    mockTodos.push(todo)
}

export const deleteTodo = (id: number) => {
    mockTodos = mockTodos.filter((todo) => todo.id !== id)
}

