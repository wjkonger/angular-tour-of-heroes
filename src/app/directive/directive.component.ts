import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, FormsModule],
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

  textColor: string = 'text-success';
  changeColor(color: string) {
    this.textColor = color;
  }

  styleColor: string = "orange";
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }
  // 2
  isTextGreen: boolean = false;

  isTextOrange: boolean = false;
  // 3
  userClass: string = '';

  customClass : any = {
    'color':'yellow',
    'height':'150px',
    'width':'400px',
    'border':'1px solid black'
  }
}
