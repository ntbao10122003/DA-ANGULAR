import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  
  categories: any[] = [];
  products : IProduct[] = [];
  constructor (private ProductService : ProductService){}
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c._id === categoryId);
    return category ? category.name : '';
  }
  ngOnInit():void  {
    this.ProductService.getProducts().subscribe(res =>{
      this.products = res.docs;
      console.log(this.products);
    });
    this.ProductService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }
  onHandleRemove(id: any){
      this.ProductService.deleteProduct(id).subscribe(() => {
        location.reload()
      })
}
}
