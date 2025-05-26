import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CustomPipe } from "../Pipes/custom.pipe";
import { CustomPostalcodePipe } from '../Pipes/custom-postalcode.pipe';

@Component({
  selector: 'app-pipe',
  imports: [FormsModule, CommonModule, CustomPipe, CustomPostalcodePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name: string = "use pipes for format data";
  today: number = Date.now();

  data = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
    },
    hobbies: ['reading', 'hiking', 'coding'],
  };

  items = of (['apple', 'banana', 'mango']);

  phoneNumber: string = "4168367878";

  postalCode: string = "l9t6g8";
}
