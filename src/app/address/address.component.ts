import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddress } from '../Interfaces/iaddress';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [FormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  SendMessage() {
    this.childOutputEvent.emit("hello world");
  }
  @Input() title: string = "";
  @Input() oAddress: IAddress = {};
  @Output() childOutputEvent = new EventEmitter();

  provinces: any[] = [
      {
          "name": "Alberta",
          "abbreviation": "AB"
      },
      {
          "name": "British Columbia",
          "abbreviation": "BC"
      },
      {
          "name": "Manitoba",
          "abbreviation": "MB"
      },
      {
          "name": "New Brunswick",
          "abbreviation": "NB"
      },
      {
          "name": "Newfoundland and Labrador",
          "abbreviation": "NL"
      },
      {
          "name": "Northwest Territories",
          "abbreviation": "NT"
      },
      {
          "name": "Nova Scotia",
          "abbreviation": "NS"
      },
      {
          "name": "Nunavut",
          "abbreviation": "NU"
      },
      {
          "name": "Ontario",
          "abbreviation": "ON"
      },
      {
          "name": "Prince Edward Island",
          "abbreviation": "PE"
      },
      {
          "name": "Quebec",
          "abbreviation": "QC"
      },
      {
          "name": "Saskatchewan",
          "abbreviation": "SK"
      },
      {
          "name": "Yukon Territory",
          "abbreviation": "YT"
      }
  ];
}
