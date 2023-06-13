import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  searchTerm: string = '';
  filteredProducts: IProduct[] = [];
  categories: any[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res.docs;
      console.log(this.products);
      this.search();
    });

    this.productService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  search(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Xử lý kết quả tìm kiếm ở đây (hiển thị danh sách, thông báo, vv.)
    console.log(this.filteredProducts);
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c._id === categoryId);
    return category ? category.name : '';
  }

  onHandleRemove(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      location.reload();
    });
  }
}
