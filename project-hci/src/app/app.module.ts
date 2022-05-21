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

=======
>>>>>>> c530263c76cb9980b359ad4ba0d59a2b76b52aa7

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    FooterComponent,
    BookingPageComponent,
<<<<<<< HEAD



=======
>>>>>>> c530263c76cb9980b359ad4ba0d59a2b76b52aa7
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
>>>>>>> c530263c76cb9980b359ad4ba0d59a2b76b52aa7
  ],
  exports: [IvyCarouselModule],

  providers: [ProfileGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
