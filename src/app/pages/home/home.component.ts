import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private userservice:DataService,
    private routes:Router,
    private _snackBar: MatSnackBar,
  ){}

  panelOpenState = false;
  ngOnInit(){
    this.routes.navigate(["/home/pictures"])
 }


//FUNCION QUE CIERRA LA SESION DEL USUARIO EN UTILIZACION

  logout(){
    this.userservice.logout()
    .then(response => {
      console.log(response)
      this.routes.navigate(["/pageinit/login"]);
      this._snackBar.open(`Hasta la proxima`,"hecho");
    })
    .catch(error => console.log(error));
   }

}
