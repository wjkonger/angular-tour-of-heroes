import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  constructor(private router: Router){
    console.log("constructor called");
  }

 

  loginData()
  {
    this.router.navigateByUrl("home");
  }
}
