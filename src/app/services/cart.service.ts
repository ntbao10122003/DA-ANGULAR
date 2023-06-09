import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart } from '../interfaces/cart';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private Http: HttpClient) { }

  createCart(userId: string): Observable<any> {
    return this.Http.post<any>(`http://localhost:8080/api/${userId}/add/cart`, {}).pipe(
      catchError((error) => {
        console.log('Lỗi khi tạo giỏ hàng:', error);
        throw error;
      })
    );
  }

  createCartItem(cartId: string, productId: any, name: string, price: number, quantity: number): Observable<any> {
    const body = {
      productId: productId,
      name: name,
      price: price,
      quantity: quantity
    };
    return this.Http.post<any>(`http://localhost:8080/api/${cartId}/add/cartItem`, body);
  }
  

  getOneCart (id: string):Observable<any> {
    return this.Http.get<ICart[]> (`http://localhost:8080/api/${id}/cart`)
  }
}
