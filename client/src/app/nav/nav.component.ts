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
  currentUser$: Observable<User | null> = of(null);

  constructor(private accountService: AccountService ) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      // !! turns user into boolean - if we have a user: true, if we don't have a user: false.
      next: user => this.loggedIn = !!user,
      error: err => console.log(err)
      
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
