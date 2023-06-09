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
import { AdminLayoutComponent } from './layout/adminLayout/admin-layout/admin-layout.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/product-edit/product-edit.component';
import { CategoryListComponent } from './page/admin/category/category-list/category-list.component';
import { CategoryAddComponent } from './page/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './page/admin/category/category-edit/category-edit.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children: [
    {path: "", component: HomePageComponent},
    {path: "products", component: ProductComponent},
    {path: "product/:id", component: ProductDetailComponent},
    {path: ":id/cart", component: CartComponent},
    {path: "info", component: InfoUserComponent},
  ]},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
  {
    path: "admin", component: AdminPageComponent
  },


  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"add", component:ProductAddComponent},
    {path:"edit/:id", component:ProductEditComponent},
    {path:"category" , component:CategoryListComponent},
    {path:"category/add" , component:CategoryAddComponent},
    {path:"category/edit/:id" , component:CategoryEditComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
