import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent }, { path: 'profile', component: ProfilePageComponent }, { path: 'favourites', component: FavoritesPageComponent },
{ path: 'sign-in', component: SignInPageComponent }, { path: 'cart', component: CartPageComponent }, { path: 'sign-up', component: SignUpPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, ProfilePageComponent, FavoritesPageComponent, SignInPageComponent, CartPageComponent, SignUpPageComponent]
