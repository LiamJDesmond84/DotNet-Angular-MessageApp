import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  constructor(public accountService: AccountService ) {}

  ngOnInit(): void {
    // Using currentUser$ observable instead of boolean loggedIn.

  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe({
  //     // !! turns user into boolean - if we have a user: true, if we don't have a user: false.
  //     next: user => this.loggedIn = !!user,
  //     error: err => console.log(err)
      
  //   })
  // }

  login()  {
    console.log(this.model);

    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);

      },
      error: err => console.log(err),
      complete: () => console.log("Login Complete")
      
    })
  }

  logout() {
    // removes user item from localStorage.
    this.accountService.logout();


  }

}
