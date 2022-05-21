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


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    FooterComponent,
    BookingPageComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientModule,

    IvyCarouselModule

  ],
  exports: [IvyCarouselModule],

  providers: [ProfileGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
