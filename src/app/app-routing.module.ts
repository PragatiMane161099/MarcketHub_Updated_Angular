import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './admins/signin/signin.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AdminService } from './admins/admin.service';

const routes: Routes = [
  {path:'signin', component: SigninComponent},

  {path:'product-list', component: ProductListComponent, canActivate:[AdminService]},
  {path:'product-add', component: ProductAddComponent, canActivate:[AdminService]},
  {path:'category-add', component: CategoryAddComponent, canActivate:[AdminService]},
  {path:'category-edit/:id', component: CategoryEditComponent, canActivate:[AdminService]},
  {path:'category-list', component: CategoryListComponent, canActivate:[AdminService]},
  {path:'brand-list', component: BrandListComponent, canActivate:[AdminService]},
  {path:'brand-add', component: BrandAddComponent, canActivate:[AdminService]},
  {path:'user-list', component: UserListComponent, canActivate:[AdminService]}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
