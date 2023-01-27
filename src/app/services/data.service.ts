import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { Botica } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private auth:Auth,
    private firestore:Firestore) { }

//REGISTRO DE USUARIO A NUESTRO LOGIN DATA EN EL FIREBASE
  registerUser({email,password}:any){
    //console.log(email)

   return createUserWithEmailAndPassword(this.auth,email,password)
}
//</>

//LOGUEO DE USUARIO ; VERIFICANDO SI ESTA EN LA BASE DE DATOS
login({email,password}:any){
  return signInWithEmailAndPassword(this.auth,email,password)
}
//</>

//FUNCION QUE CIERRA LA SESION DEL USUARIO EN UTILIZACION
logout(){
  return signOut(this.auth)
}
//</>


//FUNCIONES PARA DATABASE EN FIREBASE USANDO FIRESTORE

//FUNCION DE FIRESTORE QUE AGREGA UNA NUEVA ENTRADA DE DATO EN NUESTRA BASE DE DATOS EN FIREBASE
addProduct(botica:Botica){
  const boticaRef = collection(this.firestore, 'products');
  return addDoc(boticaRef, botica)    
}
//</>


//FUNCION DE FIRESTORE QUE TRAE DATOS DE NUESTRA BASE DE DATOS ALOJADA EN FIREBASE
getDataBotica():Observable<Botica[]>{
  const boticaRef = collection(this.firestore, 'products');
  return collectionData(boticaRef, {idField:'id'}) as Observable<Botica[]>
}
//</>


//FUNCION QUE ELIMINA UNA FILA DE DATOS DE UNA COLECCIÒN EN NUESTRA DATABASE DE FIREBASE
deletedProduct(botica:Botica){
  const boticaRef = doc(this.firestore, `products/${botica.id}`)
  return deleteDoc(boticaRef);
}
//</>
}
