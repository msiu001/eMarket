import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AngularFireModule } from '@angularfire2';
//import { AngularFireDatabaseModule } from '@angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarBootstrapComponent } from './Components/navbar-bootstrap/navbar-bootstrap.component';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
