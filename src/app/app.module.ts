import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
