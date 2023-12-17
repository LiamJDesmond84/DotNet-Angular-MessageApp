import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit{

  baseURl: string = "https://localhost:5001/api/"


	constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  get404Error(){
    this.http.get(this.baseURl + "bug/not-found")
      .subscribe({
        next: response => console.log(response),
        error: err => console.log(err)
      })
  }

  get400Error(){
    this.http.get(this.baseURl + "bug/bad-request")
    .subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get500Error(){
    this.http.get(this.baseURl + "bug/server-error")
    .subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
      
      
    })
  }
  
}
