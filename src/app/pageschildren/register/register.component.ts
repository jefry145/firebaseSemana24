import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//vista del password
hide = true;
//</>


  //servicios
  constructor(
    private userservice:DataService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private routes:Router,
  ){}
//</>

//VALIDACION Y FORMULARIO DE REGISTRO DE USUARIO
  public formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(3),Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
//</>


//REGISTRO DE USUARIO EN LA BASE DE DATOS FIREBASE
 onSubmit(){
  this.userservice.registerUser(this.formLogin.value)
  .then(response => {
    console.log(response)
    this.routes.navigate(["/pageinit/login"])
    this._snackBar.open(`Usuario registrado :  ${this.formLogin.value.email}`,"hecho");
  })
  .catch(error => console.log(error));
 }


}
