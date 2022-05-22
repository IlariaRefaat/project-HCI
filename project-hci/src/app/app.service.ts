import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ProfileGuardService } from './services/profile-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AppService implements CanActivate {
  AppcanActivate: ProfileGuardService
  constructor() { }
}
