import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }


  login(model: any) {
    this.http.post(this.baseUrl + "account/login", model)
      .subscribe({
        next: () => {
          console.log("Login");
        },
        error: (err) => console.log(err),
        complete: () => console.log("Complete")
        
      })
  }

}
