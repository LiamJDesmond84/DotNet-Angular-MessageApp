import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registerMode: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  registerToggler() {
    this.registerMode = !this.registerMode;
  }

}
