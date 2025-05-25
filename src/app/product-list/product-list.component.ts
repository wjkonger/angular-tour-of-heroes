import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

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
    this.oProduct.ListProducts().subscribe(response=>{
      this.listOfProducts = response;
      
    })
  }
}
