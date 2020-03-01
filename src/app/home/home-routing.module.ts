import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDitailsComponent } from './blog-ditails/blog-ditails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FirstfoodsComponent } from './firstfoods/firstfoods.component';
import { Home1Component } from './home1/home1.component';
import { HomeComponent } from './home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { ProductditailsComponent } from './productditails/productditails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginhComponent } from './loginh/loginh.component';

const routes: Routes = [
  {
path:'home',component:HomeComponent, children:[

{path:'',component:Home1Component},
{path:'home1',component:Home1Component},
{path:'about',component:AboutComponent},
{path:'blog',component:BlogComponent},
{path:'blogditails',component:BlogDitailsComponent},
{path:'cart',component:CartComponent},
{path:'checkout',component:CheckoutComponent},
{path:'contact',component:ContactComponent},
{path:'drink',component:DrinksComponent},
{path:'firstfood',component:FirstfoodsComponent},
{path:'myaccount',component:MyAccountComponent},
{path:'pizza',component:PizzaComponent},
{path:'productditail',component:ProductditailsComponent},
{path:'wishlist',component:WishlistComponent},
{path:'loginh',component:LoginhComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
