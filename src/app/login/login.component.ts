import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  oUser : User = {};
  
  Submit(userForm: NgForm) {
    console.log(userForm.value);
  }

  constructor(private router: Router){
    
  }
}
