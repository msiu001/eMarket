import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'navbar-bootstrap',
  templateUrl: './navbar-bootstrap.component.html',
  styleUrls: ['./navbar-bootstrap.component.css']
})
export class NavbarBootstrapComponent {

  constructor(public auth: AuthService) { 
    
  }


  logout(){
    this.auth.logout();
  }

}
