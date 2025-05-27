import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../Interfaces/iuser';
import { IResponse } from '../Interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl : string = "";
  readonly JWT_TOKEN = "JWT_TOKEN";
  loggedUser?: string;
  isAuthencatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private oHttpClient : HttpClient) {
    this.apiUrl = "https://dummyjson.com/auth/login";
  }

  doLoginUser(username: string, tokens: any){
    this.loggedUser = username;
    this.storeJwtToken(tokens.jwt);
    this.isAuthencatedSubject.next(true);
  }

  storeJwtToken(jwt: string){
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthencatedSubject.next(false);
  }

  login(oUser: IUser)
  {
    return this.oHttpClient.post<IResponse>(this.apiUrl, { "username": oUser.username, "password": oUser.password });
  }
}
