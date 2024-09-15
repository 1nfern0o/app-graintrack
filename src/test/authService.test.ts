import { describe, it, expect } from 'vitest';
import { AuthService } from '../core/services/AuthService';

describe('AuthService', () => {
  it('should authenticate a user', () => {
    const authService = new AuthService();
    authService.login('admin', 'password');
    authService.isAuthenticated().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(true);
    });
  });

  it('should logout a user', () => {
    const authService = new AuthService();
    authService.login('admin', 'password');
    authService.logout();
    authService.isAuthenticated().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(false);
    });
  });
});
