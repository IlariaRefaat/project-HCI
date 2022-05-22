import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { ProfileGuardService } from './services/profile-guard.service';
import { HttpClientModule } from '@angular/common/http';

import { NavigationBarComponent } from './Masters/components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './Masters/footer/footer.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


import { HttpService } from './services/http.service';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'



import { CheckoutAppComponent } from './pages/checkout-app/checkout-app.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    FooterComponent,
    BookingPageComponent,
    CheckoutAppComponent,

    EventPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,

    HttpClientModule,
    IvyCarouselModule,
    NoopAnimationsModule,


  ],
  exports: [IvyCarouselModule],
  providers: [ProfileGuardService, AuthService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
