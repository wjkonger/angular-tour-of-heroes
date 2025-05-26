import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../Services/shared-data.service';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  dummyData : User;
  apiData: any;
  constructor(private _sharedDataService : SharedDataService){
    this.dummyData = _sharedDataService.oUser;    
  }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._sharedDataService.getUserData().subscribe(response=>{
      this.apiData = response;
    })
  }

}
