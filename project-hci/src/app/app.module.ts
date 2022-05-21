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
<<<<<<< HEAD
import { UserService } from './services/user.service';

=======
>>>>>>> cc7204a67b5920b95c36cfa76cec92d54df3736a

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    FooterComponent,
    BookingPageComponent,
<<<<<<< HEAD

=======
>>>>>>> cc7204a67b5920b95c36cfa76cec92d54df3736a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule,
    IvyCarouselModule


=======

    HttpClientModule,

    IvyCarouselModule,
>>>>>>> cc7204a67b5920b95c36cfa76cec92d54df3736a
  ],
  exports: [IvyCarouselModule],

  providers: [ProfileGuardService, AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
