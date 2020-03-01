import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDitailsComponent } from './blog-ditails/blog-ditails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FirstfoodsComponent } from './firstfoods/firstfoods.component';
import { Home1Component } from './home1/home1.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { ProductditailsComponent } from './productditails/productditails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginhComponent } from './loginh/loginh.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDitailsComponent,
    CartComponent,
    ContactComponent,
    CheckoutComponent,
    MyAccountComponent,
    ProductditailsComponent,
    WishlistComponent,
    DrinksComponent,
    PizzaComponent,
    FirstfoodsComponent,
    Home1Component,
    LoginhComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
