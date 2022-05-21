import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  createUser(user: User) {
    this.http.post('https://project-hci-d1a10-default-rtdb.firebaseio.com/users.json', user)
      .subscribe((res) => {
        console.log(res)

      })


  }



}
