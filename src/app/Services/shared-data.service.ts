import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  url: string = "https://jsonplaceholder.typicode.com/users";
  oUser : User = {};

  constructor(private _httpClient : HttpClient) { 
    this.oUser.name = "Michael";
    this.oUser.email = 'wjkonger@gmail.com';
  }

  getUserData(){
    return this._httpClient.get(this.url);
  }
 
}
