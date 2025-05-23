import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
isChecked: boolean = false;

  onClick(){
    this.isChecked = !this.isChecked;
  }

  users : any[] = [
    {name: "michael", email: "wjkonger@gmail.com"},
    {name: "janet", email: "janetlin88@gmail.com"},
    {name: "han", email: "han@gmail.com"},
    {name: "shun", email: "shun@gmail.com"}
  ]
}
