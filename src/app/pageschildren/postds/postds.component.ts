import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-postds',
  templateUrl: './postds.component.html',
  styleUrls: ['./postds.component.css']
})
export class PostdsComponent {

  constructor(
    private formBuilder: FormBuilder,
    private boticaService:DataService,
    private routes:Router,
    private _snackBar: MatSnackBar){}

  //FORMULARIO 
  public formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      product: ["", [Validators.required, Validators.minLength(3)]],
      cost: ["", [Validators.required, Validators.minLength(1)]],
      img:["",[Validators.required,Validators.minLength(3)]]
    });
  }
   //</>


  //FUNCION DE INGRESO DE UN DATO A NUESTRA DATABASE EN FIREBASE
  async onSubmit(){
    console.log(this.formLogin.value)
    const response = this.boticaService.addProduct(this.formLogin.value)
    console.log(response)
    this.routes.navigate(["/home/products"])
    this._snackBar.open(`${this.formLogin.value.product} Registrado con exito!`,"hecho");
    


  }
   //</>
}
