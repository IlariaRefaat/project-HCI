import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-app',
  templateUrl: './checkout-app.component.html',
  styleUrls: ['./checkout-app.component.css']
})
export class CheckoutAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  checkout(): void {
    this.router.navigate(['checkout-app'])
  }
}
