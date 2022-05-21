import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavigationBarComponent } from "./Masters/components/navigation-bar/navigation-bar.component";
import { AuthService } from './services/auth.service';
import { ProfileGuardService } from './services/profile-guard.service';


=======
import { NavigationBarComponent } from './Masters/components/navigation-bar/navigation-bar.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './Masters/footer/footer.component';
>>>>>>> b393cf5e4a97ee24e88fab8dd56212da07766d92

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IvyCarouselModule,
  ],
<<<<<<< HEAD
  providers: [ProfileGuardService, AuthService],
  bootstrap: [AppComponent]
=======
  providers: [],
  bootstrap: [AppComponent],
>>>>>>> b393cf5e4a97ee24e88fab8dd56212da07766d92
})
export class AppModule {}
