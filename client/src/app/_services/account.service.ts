import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

}
