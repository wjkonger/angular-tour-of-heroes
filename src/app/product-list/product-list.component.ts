import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
 

  listOfProducts : IProduct[] = [];

  constructor(private oProduct: ProductService)
  {
     
  }
  ngOnInit(): void {
    this.ListProducts();
  }

  ListProducts()
  {
    this.oProduct.ListProducts().subscribe(response=>{
      this.listOfProducts = response;   
    })
  }

   Delete(id: number) {
    this.oProduct.Delete(id).subscribe(response =>{
      this.ListProducts();
    })
    
  }
}
