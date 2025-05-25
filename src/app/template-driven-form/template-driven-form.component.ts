import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  SetValue(userForm: NgForm) {
    this.oUser.name = "Michael Kong";
    this.oUser.email = "wjkonger@gmail.com";
    // this.oUser.password = "112323";

    // userForm.setValue(this.oUser);

    userForm.control.patchValue(this.oUser);
  }
    oUser : User = {};

    Submit(userForm : NgForm)
    {
        console.log(userForm.value);
        console.log(userForm.valid);
    }
}
