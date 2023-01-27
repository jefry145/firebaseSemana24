import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppMaterial } from '../angular.material.module';
import { PostdsComponent } from './postds/postds.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PostdsComponent,
    PicturesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    PostdsComponent,
    PicturesComponent,
    ProductsComponent
  ]
})
export class PageschildrenModule { }
