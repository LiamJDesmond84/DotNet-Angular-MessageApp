import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

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
      next: () => this.router.navigateByUrl('/members'),
      error: err => this.toastr.error(err.error),
      complete: () => console.log("Login Complete")
      
    })
  }

  logout() {
    // removes user item from localStorage.
    this.accountService.logout();
    this.router.navigateByUrl('/');


  }

}
