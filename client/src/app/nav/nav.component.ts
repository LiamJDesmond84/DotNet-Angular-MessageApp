import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private accountService: AccountService ) {}

  ngOnInit(): void {

  }

  login(model: any)  {
    console.log(this.model);
    
    this.accountService.login(model)
    .subscribe({
      next: () => {
        console.log("Login");
      },
      error: (err) => console.log(err),
      complete: () => console.log("Complete")
      
    })
  }

}
