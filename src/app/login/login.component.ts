import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../Services/auth.service';
import { IUser } from '../Interfaces/iuser';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  oUser : User = {};
  user : IUser = {};

  Submit(userForm: NgForm) {
    this.user.username = "emilys";
    this.user.password = "emilyspass";

    this.oAuth.login(this.user).subscribe(response=>{
      this.oAuth.storeJwtToken(response.accessToken as string);
    })
  }

  constructor(private router: Router, private oAuth: AuthService){
    
  }
}
