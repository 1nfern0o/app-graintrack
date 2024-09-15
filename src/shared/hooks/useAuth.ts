import { useEffect, useState } from 'react'
import { AuthService } from '../../core/services/AuthService'
import { Observable } from 'rxjs'
import { container } from 'tsyringe'

export const useAuth = () => {
  const authService = container.resolve(AuthService)
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const subscription = authService.isAuthenticated().subscribe(setAuthenticated)
    return () => subscription.unsubscribe()
  }, [authService])

  return { isAuthenticated, login: authService.login.bind(authService), logout: authService.logout.bind(authService) }
}
