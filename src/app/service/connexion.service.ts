import { Injectable } from '@angular/core';
import { UserConnexion } from '../models/user-connexion';
import { USERS } from '../data/userConnexion';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor() { }
  private connexionList: UserConnexion[] = USERS;
  private isAuthenticatedAuth = false;
  /**
   *
   * @returns UserConnexion[]
   */
  public getConnexionList = (): UserConnexion[] => this.connexionList;

  login() {
    this.isAuthenticatedAuth = true;
  }

  logout() {
    this.isAuthenticatedAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedAuth;
  }
  /**
   *
   * @param email
   * @param password
   * @returns UserConnexion
   */
  public getUserConnexion = (email: string | undefined, password: string | undefined): UserConnexion | undefined => {
    this.login()
    return this.connexionList.find(user => user.email === email && user.password === password);
  }
}
