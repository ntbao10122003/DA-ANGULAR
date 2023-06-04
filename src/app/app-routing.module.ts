import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { BaseLayoutComponent } from './layout/baseLayout/base-layout/base-layout.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { ProductComponent } from './page/products/product/product.component';
import { SignupComponent } from './page/signup/signup.component';
import { SigninComponent } from './page/signin/signin.component';
import { InfoUserComponent } from './page/info-user/info-user.component';
import { AdminPageComponent } from './page/admin/admin-page/admin-page.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children: [
    {path: "", component: HomePageComponent},
    {path: "products", component: ProductComponent},
    {path: "product/:id", component: ProductDetailComponent},
    {path: "cart", component: CartComponent},
    {path: "info", component: InfoUserComponent},
    {path:"detail",component: ProductDetailComponent}
  ]},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
  {
    path: "admin", component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
