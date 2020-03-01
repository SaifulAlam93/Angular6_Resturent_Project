import { BlogDitailsloginComponent } from './blog-ditailslogin/blog-ditailslogin.component';
import { BlogloginComponent } from './bloglogin/bloglogin.component';
import { CheckoutloginComponent } from './checkoutlogin/checkoutlogin.component';
import { CommonModule } from '@angular/common';
import { ContactloginComponent } from './contactlogin/contactlogin.component';
import { DrinksloginComponent } from './drinkslogin/drinkslogin.component';
import { FirstfoodsloginComponent } from './firstfoodslogin/firstfoodslogin.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { PizzaloginComponent } from './pizzalogin/pizzalogin.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeloginComponent,
    FirstfoodsloginComponent,
    PizzaloginComponent,
    DrinksloginComponent,
    ContactloginComponent,
    CheckoutloginComponent,
    BlogDitailsloginComponent,
    BlogloginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],

})
export class LoginModule { }
