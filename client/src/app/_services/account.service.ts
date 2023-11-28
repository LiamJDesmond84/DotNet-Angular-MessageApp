import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }


  login(model: any) {
    return this.http.post<any>(this.baseUrl + "account/login", model).pipe(
      map((response: any) => {
        var user = response;

        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

}
