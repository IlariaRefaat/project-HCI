import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  i = 0;
  events = [
    { image: 'project-hcisrcassetsCarouselmaroon5.png', alt: 'Description' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }
  book(): void {
    this.router.navigate(['booking-page']);
  }

}
