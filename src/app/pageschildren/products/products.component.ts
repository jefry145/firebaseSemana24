import { Component, OnInit } from '@angular/core';
import { Botica } from 'src/app/interfaces/interface';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

   Products!:Botica[];


   constructor( private boticaService :DataService,
    private _snackBar: MatSnackBar){}


//FUNCION QUE TRAE LOS DATOS DE NUESTRA DATABASE DE FIRESTORE EN FIREBASE
   ngOnInit(): void {
      this.boticaService.getDataBotica().subscribe(Botica =>{
        this.Products = Botica
      })
      
   }
//</>


//FUNCION QUE BORRA UNA FILA DE NUESTRA BASE DE DATOS TOMANDO EL ID QUE SE GENERA EL FIRESTORE

DeletButton(Products : Botica){
    const response = this.boticaService.deletedProduct(Products)
     console.log(response)
     this._snackBar.open(`Fila eliminada!`,"hecho");
    
}

//</>

   //TABLA DE CONTENIDO
  displayedColumns: string[] = ['product', 'cost', 'image', 'delete'];
  dataSource = this.Products;
  //</>
}
