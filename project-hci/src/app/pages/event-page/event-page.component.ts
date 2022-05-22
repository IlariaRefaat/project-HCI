import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Event } from '../../classes/Event'


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  allEvents: Event[];
  isFetching: boolean = false;



  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.fetchEvents();

  }
  private fetchEvents() {
    this.isFetching = true;
    this.httpService.fetchEvents().subscribe((events) => {
      this.allEvents = events;
      this.isFetching = false;
      console.log(events)
    })

  }
  displayedColumns = ['id', 'location', 'name', 'price']


}
