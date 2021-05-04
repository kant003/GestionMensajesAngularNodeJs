import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly URL = "http://localhost:5100/user/"
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.URL)
  }

  getUserById(id: String): Observable<User>{
    return this.http.get<User>(this.URL + id)
  }
  saveUser(user: User): Observable<any>{
    return this.http.post(this.URL, user)
  }
  deleteUser(id: String): Observable<any>{
    return this.http.delete(this.URL + id)
  }
  updateUser(id: String, user: User): Observable<any>{
    return this.http.put(this.URL+id , user)
  }
}
