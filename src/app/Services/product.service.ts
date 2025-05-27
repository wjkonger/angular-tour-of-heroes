import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl : string = "";
  listOfProducts : IProduct[] = [];

  constructor(private oHttpClient : HttpClient) { 
    this.apiUrl = environment.apiUrl + "Products";
    
  }

  httpHeader = {
    "Content-Type": "application/json",
    "X-Master-Key": "$2a$10$miZnT2oIUJzKCIRwjyjpjO6TRMKzHup/hMZQ8ZlKrUFLQJoZ453xe",
    "X-Access-Key": "$2a$10$KmzUuPrWJkE3FGdKIvQpOu2sqL4SJOOQ4pBA/2eR0vSU/X2GcgalO"
  };

  ListProducts()
  {
    return this.oHttpClient.get<IProduct[]>(this.apiUrl, {
      headers : this.httpHeader
    });
    
  }

  Delete(id : number)
  {
    return this.oHttpClient.delete(this.apiUrl + "/" + id, {headers : this.httpHeader});
  }
}
