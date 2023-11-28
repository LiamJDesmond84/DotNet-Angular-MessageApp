import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService ) {}

  ngOnInit(): void {}

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
    })
  }

  login()  {
    console.log(this.model);

    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.loggedIn = true;
      },
      error: err => console.log(err),
      complete: () => console.log("Login Complete")
      
    })
  }

  logout() {
    // removes user item from localStorage.
    this.accountService.logout();

    this.loggedIn = false;
  }

}
