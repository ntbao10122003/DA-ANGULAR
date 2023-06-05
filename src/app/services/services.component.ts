import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
 providedIn : 'root'
})

export class ProductService {
  constructor(private http : HttpClient){}

  getProducts ():Observable<any> {
    return this.http.get<IProduct[]> (`http://localhost:8082/api/products`)
  }

  getProductById (id :any):Observable<IProduct> {
    return this.http.get<IProduct> (`http://localhost:8082/api/products/${id}`)
  }


  addProduct (product : IProduct):Observable<IProduct> {
    return this.http.post<IProduct> (`http://localhost:8082/api/products`,product)
  }


  updateProduct (product : IProduct):Observable<IProduct> {
    return this.http.patch<IProduct> (`http://localhost:8082/api/products/${product._id}`,product)
  }

  deleteProduct (id:any):Observable<IProduct> {
    return this.http.delete<IProduct> (`http://localhost:8082/api/products/${id}`)
  }
}