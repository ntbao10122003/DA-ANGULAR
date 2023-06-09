import { ICategories } from './../../../../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
    constructor(
      private productService: ProductService,
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router
    ) { }
    
    categories: any[] = [];
    categoryForm = this.formBuilder.group({
      name: [''],
    });
    async onHandleAdd() {
      if (this.categoryForm.valid) {
        const category: ICategories = {
          name: this.categoryForm.value.name || "",
        };
        this.productService.addCategory(category).subscribe((product) => {
          console.log('Thành công', product);
          this.router.navigate(['/admin/category']);
        });
      }
    }
}
