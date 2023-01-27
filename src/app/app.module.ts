import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp , provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BreakpageComponent } from './components/breakpage/breakpage.component';
import { LoginComponent } from './pageschildren/login/login.component';
import { RegisterComponent } from './pageschildren/register/register.component';
import { PagesModule } from './pages/pages.module';
import { PageschildrenModule } from './pageschildren/pageschildren.module';
import { AppMaterial } from './angular.material.module';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    BreakpageComponent,
 
  ],
  imports: [
    AppRoutingModule,
    PagesModule,
    PageschildrenModule,
    AppMaterial,
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
