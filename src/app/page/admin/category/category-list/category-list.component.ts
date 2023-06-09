import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: any[] = [];
  constructor (private ProductService : ProductService){}
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c._id === categoryId);
    return category ? category.name : '';
  }
  ngOnInit():void  {
    this.ProductService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }
  onHandleRemove(id: any){
      this.ProductService.deleteCategory(id).subscribe(() => {
        location.reload()
      })
}
}
