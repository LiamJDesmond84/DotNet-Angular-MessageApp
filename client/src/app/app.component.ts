import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Message App';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit(): void {
    
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers() {

    this.http.get<any>('https://localhost:5001/api/users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Get Users Complete')
    })

  }

  setCurrentUser(){

    const userString= localStorage.getItem('user');
    if(!userString) {
      return;
    }
    else{
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);

    }


  }


}
