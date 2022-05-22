import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../classes/User';
import { Event } from '../classes/Event';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  createUser(user: User) {
    this.http.post<{ name: string }>('https://project-hci-d1a10-default-rtdb.firebaseio.com/users.json', user)
      .subscribe((res) => {
        console.log(res)

      })


  }
  fetchEvents() {

    return this.http.get<{ [key: string]: Event }>('https://project-hci-d1a10-default-rtdb.firebaseio.com/events.json').pipe(map((res) => {
      const events = []
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          events.push({ ...res[key], id: key })

        }

      }
      return events;
    }))
  }




}
