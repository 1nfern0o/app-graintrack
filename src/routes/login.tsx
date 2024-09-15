import { createFileRoute } from '@tanstack/react-router'
import MainPage from '../pages/MainPage'

export const Route = createFileRoute('/login')({
  component: () => <MainPage />
})