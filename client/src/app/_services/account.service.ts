import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  login(model: any) {
    this.http.post("https://localhost:5001/api/account/login", model)
      .subscribe({
        next: () => {
          console.log("Login");
          
        },
        error: (err) => console.log(err),

        
        
      })
  }

}
