import { Injectable } from '@angular/core';
import { Constants } from '../models/constants';

@Injectable()
export class AuthService {

  login(username: string, password: string) {
    const authToken = this.generateAuthToken(username, password);
    this.setAuthToken(authToken);
    this.storeUsername(username);
  }

  getAuthToken(): string {
    const authToken = localStorage.getItem(Constants.STORAGE_KEY_TOKEN);
    return authToken ? authToken : '';
  }

  setAuthToken(authToken: string) {
    localStorage.setItem(Constants.STORAGE_KEY_TOKEN, authToken);
  }

  generateAuthToken(username: string, password: string): string {
    return btoa(username + ':' + password);
  }

  getCurrentUser(): string {
    const username = localStorage.getItem(Constants.STORAGE_KEY_USERNAME);
    return username ? username : null;
  }

  logout() {
    this.clearAuthToken();
    this.clearCredentials();
  }

  private clearAuthToken() {
    localStorage.removeItem(Constants.STORAGE_KEY_TOKEN);
  }

  private clearCredentials() {
    localStorage.removeItem(Constants.STORAGE_KEY_USERNAME);
  }

  private storeUsername(username: string) {
    localStorage.setItem(Constants.STORAGE_KEY_USERNAME, username);
  }
}
