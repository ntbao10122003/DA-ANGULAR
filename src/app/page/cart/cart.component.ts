import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ICart, ICartItem } from '../../interfaces/cart';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartInfo: ICartItem[] = [];
  totalAmount: number = 0;
  id!: string | null;
  cartForm = this.formBuilder.group({
    name: [''],
    email: [''],
    phone: [],
    address: ['']
  })
  
  constructor(private route: ActivatedRoute, private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      const localStorageData = localStorage.getItem('accessToken');
      if (localStorageData) {
        const data = JSON.parse(localStorageData);
        this.cartForm.patchValue({
          name: data.auth.name,
          email: data.auth.email,
          phone: data.auth.phone
        })
      }

      if (this.id) {
        this.cartService.getOneCart(this.id).subscribe(res => {
          this.cartInfo = res.items;
          console.log(this.cartInfo);
          this.calculateTotalAmount()
        });
      }
    });
    
  }
  calculateTotalAmount(): void {
    this.totalAmount = 0;
    for (let cartItem of this.cartInfo) {
      this.totalAmount += cartItem.price * cartItem.quantity;
    }
  }
}
