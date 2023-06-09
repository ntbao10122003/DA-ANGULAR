import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/interfaces/category';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  categories!: ICategories;
  categoryForm = this.formBuilder.group({
    name: [''],
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.productService.getCategoryById(id).subscribe(product => {
        this.categories = product;
        this.categoryForm.patchValue({
          name: product.name,
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    if (this.categoryForm.valid) {
      const newCategory: ICategories = {
        _id: this.categories._id,
        name: this.categoryForm.value.name || "",
      }
      this.productService.updateCategory(newCategory).subscribe(product => {
        console.log(product);
        this.router.navigate(['admin/category']);
      })
    }
  }
  
}
