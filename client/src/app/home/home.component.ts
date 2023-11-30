import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}
