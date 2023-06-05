import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {IProduct} from "../../interfaces/product";
import { ProductService } from 'src/app/services/services.component';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: IProduct;

  constructor (private productService :  ProductService , private route : ActivatedRoute){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      console.log(id);
      
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        console.log(this.product);
        
      }, error => console.log(error.message))
    })
  }
}
