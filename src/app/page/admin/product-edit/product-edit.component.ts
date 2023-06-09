import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadServiceService } from 'src/app/services/upload-service.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  categories: any[] = [];
  files: File[] = [];
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
    private router: Router,
    private uploadService: UploadServiceService) {
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
  async uploadFiles(files: File[]) {
    if (files && files.length > 0) {
      const formData = new FormData();
      for (const file of files) {
        formData.append('file', file);
      }
      formData.append('upload_preset', 'ecma-we17303');
      formData.append('cloud_name', 'dds5d6hm0');
  
      const uploadedFiles = await this.uploadService.uploadImage(formData).toPromise();
      console.log(uploadedFiles);
      
      // Xử lý URL trả về từ Cloudinary
      if (uploadedFiles && uploadedFiles.url) {
        const imageUrl = uploadedFiles.url;
        console.log(imageUrl);
        return imageUrl;
      }
    }
  }
  async onHandleUpdate() {
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
      const uploadedImageUrl = await this.uploadFiles(this.files);
      if (uploadedImageUrl) {
        newProduct.images = uploadedImageUrl;
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
  
  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
