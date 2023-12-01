import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  test: any;

  //! Sends input from PARENT to CHILD(this)
  // @Input() usersFromHomeComponent: any;
  // @Input() usersFromHomeComponent: Array<User> = [];

  //! Sends input from CHILD(this) to PARENT
  @Output() cancelRegister = new EventEmitter();

  model: any = {}

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: err => console.log(err)  
    })
    
  }

  cancel() {
    console.log("Canceled");
    
    //* registerToggle(registerMode variable) to FALSE
    this.cancelRegister.emit(false);
    
  }

}
