import React from 'react'
import { useAuth } from '../shared/hooks/useAuth'

const MainPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <div className="w-screen flex flex-col items-center gap-4 justify-center">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      {isAuthenticated && (
        <button onClick={logout} className="text-red-500">Logout</button>
      )}
    </div>
  );
}

export default MainPage
