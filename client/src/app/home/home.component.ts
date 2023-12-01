import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
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

  //* CHILD - REGISTER HTML -> (click) -> register.ts cancel() -> @Output() cancelRegister = EventEmitter -> HOME HTML -> (cancelRegister) -> home.ts -> cancelRegistration()
  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
