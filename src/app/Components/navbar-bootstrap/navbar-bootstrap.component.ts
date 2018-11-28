import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar-bootstrap',
  templateUrl: './navbar-bootstrap.component.html',
  styleUrls: ['./navbar-bootstrap.component.css']
})
export class NavbarBootstrapComponent {

  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user);
  }


  logout(){
    this.afAuth.auth.signOut();
  }

}
