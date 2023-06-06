import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  categories: any[] = [];
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    shortDesc: [''],
    brand: [''],
    categoryId: [''],
    images: [''],
    longDesc: [''],
    
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          shortDesc: product.shortDesc,
          brand: product.brand,
          categoryId: product.categoryId,
          images: product.images,
          longDesc: product.longDesc
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    if (this.productForm.valid) {
      const newProduct: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        shortDesc: this.productForm.value.shortDesc || "",
        brand: this.productForm.value.brand || "",
        categoryId: this.productForm.value.categoryId || "",
        images: this.productForm.value.images || "",
        longDesc: this.productForm.value.longDesc || this.product.longDesc,
       
      }
      this.productService.updateProduct(newProduct).subscribe(product => {
        console.log(product);
        this.router.navigate(['/admin']);
      })
    }
  }
  ngOnInit() {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  
}
