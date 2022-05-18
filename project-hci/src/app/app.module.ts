import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from "./Masters/components/navigation-bar/navigation-bar.component";



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
