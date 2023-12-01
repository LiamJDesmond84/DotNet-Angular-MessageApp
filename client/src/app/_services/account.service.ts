import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "https://localhost:5001/api/";
  private currentUserSource = new BehaviorSubject<User | null>(null);

  //! For use in other components?
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }


  login(model: User) {
    return this.http.post<User>(this.baseUrl + "account/login", model)
    .pipe(map(user => {

      if(user){
        
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    }));
  }

  register(model: User) {
    return this.http.post<User>(this.baseUrl + "account/register", model)
      .pipe(map(user => {

        if(user){
          
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      }));
  }

  // To be used inside a component to set this inside AccountService.
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
