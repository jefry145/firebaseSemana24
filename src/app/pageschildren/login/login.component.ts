import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

//vista del password
hide = true;
//</>
durationInSeconds = 5;


  //servicios
  constructor(
    private userservice:DataService,
    private formBuilder: FormBuilder,
    private routes:Router,
    private _snackBar: MatSnackBar
  ){}
//</>


//VALIDACION DE DATOS INGRESADOS CORRECTAMENTE
  public formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(3),Validators.email ]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
//</>


//LOGUEO DE USUARIO ; VERIFICANDO SI ESTA EN LA BASE DE DATOS
 onSubmit(){
  this.userservice.login(this.formLogin.value)
  .then(response => {
    console.log(response)
    this.routes.navigate(["/home"])
    this._snackBar.open(`Bienvenido   ${this.formLogin.value.email}`,"hecho");
    
  })
  .catch(error => console.log(error));
 }
}
