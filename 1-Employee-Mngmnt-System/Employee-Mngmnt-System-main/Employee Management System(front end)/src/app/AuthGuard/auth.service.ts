import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.setItem('loggedIn', 'true');
      resolve(true);
    })
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
   // Add this method to get the user's role
   getUserRole(): string {
    // For simplicity, returning a default role 'user'
    return 'user';
  }
}