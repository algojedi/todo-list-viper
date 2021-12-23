import React from 'react'
import Header from '../molecules/header'
import TodoPage from '../pages/todo-page'

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    return (
        <>
            <Header />
            <TodoPage />
        </>
    )
}
