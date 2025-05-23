import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnChanges, OnInit, DoCheck{
  constructor(private router: Router){
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // use for components input property
    console.log("1. ngOnChanges() called");
  }

  ngOnInit(): void {
    // use for API call
    console.log("2. ngOnInit() called");
  }

  ngDoCheck(): void {
    console.log("3. ngDoCheck() called");
  }

  loginData()
  {
    this.router.navigateByUrl("home");
  }
}
