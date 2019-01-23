import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'favourite', loadChildren: './favourite/favourite.module#FavouritePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
