import { createFileRoute, redirect } from '@tanstack/react-router'
import LoginPage from '../pages/LoginPage'
import { useAuth } from '../shared/hooks/useAuth'
import MainPage from '../pages/MainPage'



export const Route = createFileRoute('/')({
  component: () => {
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? <MainPage /> : <LoginPage />
  }
})