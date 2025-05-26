import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl : string = "";
  listOfProducts : IProduct[] = [];

  constructor(private oHttpClient : HttpClient) { 
    this.apiUrl = environment.apiUrl + "Products";
    
  }

  ListProducts()
  {
    return this.oHttpClient.get<IProduct[]>(this.apiUrl);
  }

  Delete(id : number)
  {
    return this.oHttpClient.delete(this.apiUrl + "/" + id);
  }
}
