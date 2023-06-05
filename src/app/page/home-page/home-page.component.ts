import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  products : IProduct[] = [];
  constructor (private ProductService : ProductService){}

  ngOnInit():void  {
    this.ProductService.getProducts().subscribe(res =>{
      this.products = res.docs;
      console.log(this.products);
      
    })
  }
  
}
