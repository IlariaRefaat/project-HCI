import { Component, OnInit } from '@angular/core';
// import { IvyCarouselModule } from 'angular-responsive-carousel';

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

  ngOnInit(): void { }
}
