import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  
    name: string = "";

    onSave(){
      window.alert("Hello " + this.name + " You clicked the Save button");
    }

    onCancel(){
      window.alert("Hello " + this.name + " You clicked the Cancel button");
    }

     onSubmit(){
      window.alert("Hello " + this.name + " You clicked the Submit button");
    }
}
