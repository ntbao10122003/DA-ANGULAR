import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';
import { HttpClient } from '@angular/common/http';
import { UploadServiceService } from 'src/app/services/upload-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private uploadService: UploadServiceService
  ) { }

  files: File[] = [];
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
    categoryId: [''],
    img: ['']
  });

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
  
  async onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        categoryId: this.productForm.value.categoryId || '',
        img: this.productForm.value.img || '',
      };
      const uploadedImageUrl = await this.uploadFiles(this.files);
      if (uploadedImageUrl) {
        product.img = uploadedImageUrl;
      }
      
      this.productService.addProduct(product).subscribe((product) => {
        console.log('Thành công', product);
      });
    }
  }
  
  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
