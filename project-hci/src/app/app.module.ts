import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from "./Masters/components/navigation-bar/navigation-bar.component";
import { AuthService } from './services/auth.service';
import { ProfileGuardService } from './services/profile-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProfileGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
