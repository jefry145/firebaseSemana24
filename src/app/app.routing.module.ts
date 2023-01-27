import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from "./pages/home/home.component";
import { InitPageComponent } from "./pages/init-page/init-page.component";
import { LoginComponent } from "./pageschildren/login/login.component";
import { RegisterComponent } from "./pageschildren/register/register.component";
import { BreakpageComponent } from "./components/breakpage/breakpage.component";
import { PostdsComponent } from "./pageschildren/postds/postds.component";
import { PicturesComponent } from "./pageschildren/pictures/pictures.component";
import { ProductsComponent } from "./pageschildren/products/products.component";


const routes : Routes =[
    {path:"home" , component: HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(["/pageinit"])),
         children:[
            {path:"postds" , component : PostdsComponent},
            {path:"pictures", component: PicturesComponent},
            {path:"products", component: ProductsComponent}
         ] },
    {path:"pageinit" , component : InitPageComponent,
         children:[
            {path:"login" , component : LoginComponent},
            {path:"register" , component:RegisterComponent} //...canActivate(()=> redirectUnauthorizedTo(["/pageinit"]))
         ]},
    
    {path:'', pathMatch:'full', redirectTo:'/pageinit'},

    {path:'404', component: BreakpageComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'},//devuelve aqui si la ruta no existe
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}