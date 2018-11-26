import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AngularFireModule } from '@angularfire2';
//import { AngularFireDatabaseModule } from '@angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarBootstrapComponent } from './Components/navbar-bootstrap/navbar-bootstrap.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminProductsComponent } from './Components/Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Components/Admin/admin-orders/admin-orders.component';
import { LoginComponent } from './Components/login/login.component';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBootstrapComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
