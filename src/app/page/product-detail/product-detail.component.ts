import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {IProduct} from "../../interfaces/product";
import { ProductService } from 'src/app/services/services.component';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: IProduct;

  constructor (private productService :  ProductService , private route : ActivatedRoute, private CartService : CartService, private router: Router){
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      console.log(id);
      
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        console.log(this.product);
        
      }, error => console.log(error.message))
    })

  }
  quantity = 1;
  addToCart() {
    const userId = '64829465d51dead55c6f4d90'; // Định danh người dùng, bạn cần thay thế bằng userId thực tế
    const productId = this.product._id; // Sử dụng productId của sản phẩm hiện tại
    const name = this.product.name; // Sử dụng tên của sản phẩm hiện tại
    const price = this.product.price; // Sử dụng giá của sản phẩm hiện tại
    const quantity = this.quantity; // Số lượng sản phẩm mặc định là 1
  
    // Gọi service để tạo giỏ hàng hoặc kiểm tra giỏ hàng đã tồn tại
    this.CartService.createCart(userId).subscribe(
      (response) => {
        const cartId = response._id; // Nhận cartId từ response của service "createCart()"
        console.log(cartId);
        
  
        console.log('Giỏ hàng đã được tạo hoặc đã tồn tại.');
        
        // Sau khi giỏ hàng được tạo hoặc đã tồn tại, thêm sản phẩm vào giỏ hàng
        this.CartService.createCartItem(cartId, productId, name, price, quantity).subscribe(
          () => {
            console.log('Sản phẩm đã được thêm vào giỏ hàng.');
            // Sau khi thêm sản phẩm vào giỏ hàng thành công, chuyển hướng đến trang giỏ hàng
            this.router.navigate([`/${userId}/cart`]);
          },
          (error) => {
            console.log('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
          }
        );
      },
      (error) => {
        console.log('Lỗi khi tạo giỏ hàng:', error);
      }
    );
  }
}