import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { AddressComponent } from "../address/address.component";
import { IAddress } from '../Interfaces/iaddress';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, AddressComponent],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  oMessage: string = "";
  ReceiveData(message: any) {
    this.oMessage = message;
  }

  GetCurrentAddress($event: IAddress) {
    console.log($event);
  }

  SetValue(userForm: NgForm) {
    this.oUser.name = "Michael Kong";
    this.oUser.email = "wjkonger@gmail.com";
    // this.oUser.password = "112323";

    // userForm.setValue(this.oUser);

    userForm.control.patchValue(this.oUser);
  }
    oUser : User = {};

    currentAddress: string = "Current Address";
    shippingAddress: string = "Shipping Address";

    oCurrentAddress: IAddress = {};

    Submit(userForm : NgForm)
    {
        console.log(userForm.value);
        console.log(userForm.valid);
        console.log(this.oCurrentAddress.streetName);
        console.log(this.oCurrentAddress.city);
    }
}
