import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

import { ProfileGuardService } from './services/profile-guard.service';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent }, { path: 'profile', component: ProfilePageComponent, canActivate: [ProfileGuardService] }, { path: 'favorites', component: FavoritesPageComponent },
{ path: 'sign-in', component: SignInPageComponent }, { path: 'cart', component: CartPageComponent }, { path: 'sign-up', component: SignUpPageComponent }, { path: '', component: HomepageComponent }, { path: 'booking-page', component: BookingPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, ProfilePageComponent, FavoritesPageComponent, SignInPageComponent, CartPageComponent, SignUpPageComponent, BookingPageComponent]
