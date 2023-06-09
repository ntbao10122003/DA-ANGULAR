import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { NavComponent } from './page/nav/nav.component';
import { BaseLayoutComponent } from './layout/baseLayout/base-layout/base-layout.component';
import { FooterComponent } from './page/footer/footer/footer.component';
import { ProductComponent } from './page/products/product/product.component';
import { SignupComponent } from './page/signup/signup.component';
import { SigninComponent } from './page/signin/signin.component';
import { InfoUserComponent } from './page/info-user/info-user.component';
import { AdminPageComponent } from './page/admin/admin-page/admin-page.component';
import { AdminLayoutComponent } from './layout/adminLayout/admin-layout/admin-layout.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/product-edit/product-edit.component';
import { NavbarAdminComponent } from './page/admin/navbar-admin/navbar-admin.component';
import { CategoryListComponent } from './page/admin/category/category-list/category-list.component';
import { CategoryAddComponent } from './page/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './page/admin/category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailComponent,
    CartComponent,
    NavComponent,
    BaseLayoutComponent,
    FooterComponent,
    ProductComponent,
    SignupComponent,
    SigninComponent,
    InfoUserComponent,
    AdminPageComponent,
    AdminLayoutComponent,
    ProductAddComponent,
    ProductEditComponent,
    NavbarAdminComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
