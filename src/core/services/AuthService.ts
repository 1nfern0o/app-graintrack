import { BehaviorSubject } from 'rxjs'
import { decorators } from 'tsyringe'

const { injectable } = decorators

@injectable()
export class AuthService {
  private session$ = new BehaviorSubject<boolean>(false);

  login(username: string, password: string) {
    // Мок логин, меняем значение сессии
    if (username === 'admin' && password === 'password') {
      this.session$.next(true);
    }
  }

  logout() {
    this.session$.next(false);
  }

  isAuthenticated() {
    return this.session$.asObservable();
  }
}
