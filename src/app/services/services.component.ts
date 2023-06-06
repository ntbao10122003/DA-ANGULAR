import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { ICategories } from '../interfaces/category';

@Injectable({
 providedIn : 'root'
})

export class ProductService {
  constructor(private http : HttpClient){}

  getProducts ():Observable<any> {
    return this.http.get<IProduct[]> (`http://localhost:8080/api/products`)
  }
  getProductById (id :any):Observable<IProduct> {
    return this.http.get<IProduct> (`http://localhost:8080/api/products/${id}`)
  }
  addProduct (product : IProduct):Observable<IProduct> {
    return this.http.post<IProduct> (`http://localhost:8080/api/products`,product)
  }
  updateProduct (product : IProduct):Observable<IProduct> {
    return this.http.patch<IProduct> (`http://localhost:8080/api/products/${product._id}`,product)
  }
  deleteProduct (id:any):Observable<IProduct> {
    return this.http.delete<IProduct> (`http://localhost:8080/api/products/${id}`)
  }
  

  getCategories ():Observable<any> {
    return this.http.get<ICategories[]> (`http://localhost:8080/api/categories`)
  }
  getCategoryById (id: any):Observable<any> {
    return this.http.get<ICategories[]> (`http://localhost:8080/api/categories/${id}`)
  }
  addCategory (product: ICategories):Observable<any> {
    return this.http.post<ICategories[]> (`http://localhost:8080/api/categories`, product)
  }
  updateCategory (product : ICategories):Observable<IProduct> {
    return this.http.patch<IProduct> (`http://localhost:8080/api/categories/${product._id}`,product)
  }
  deleteCategory (id:any):Observable<IProduct> {
    return this.http.delete<IProduct> (`http://localhost:8080/api/categories/${id}`)
  }
}