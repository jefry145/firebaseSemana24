import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InitPageComponent } from './init-page/init-page.component';
import { AppMaterial } from '../angular.material.module';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    InitPageComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    InitPageComponent
  ]
})
export class PagesModule { }
