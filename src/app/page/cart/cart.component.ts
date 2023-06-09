import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ICart } from '../../interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartInfo: ICart[] = [];
  id!: string | null;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      if (this.id) {
        this.cartService.getOneCart(this.id).subscribe(res => {
          this.cartInfo = res.items;
          console.log(this.cartInfo);
        });
      }
    });
  }
}
