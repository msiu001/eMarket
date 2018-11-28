import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from '../../../../node_modules/firebase';

@Component({
  selector: 'navbar-bootstrap',
  templateUrl: './navbar-bootstrap.component.html',
  styleUrls: ['./navbar-bootstrap.component.css']
})
export class NavbarBootstrapComponent {

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(x => console.log(x));
  }


  logout(){
    this.afAuth.auth.signOut();
  }

}
