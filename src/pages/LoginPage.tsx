import React from 'react'
import LoginForm from '../features/LoginForm'

const LoginPage: React.FC = () => {
  return (
    <div className="w-screen flex flex-col items-center gap-4 justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage
