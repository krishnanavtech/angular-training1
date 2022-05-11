import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  name='angular gta'
  obj={
    name:"somename 1",
    age:20
  }
  arr=['element1', 'element1']
  getName(){
    return this.name
  }
  window=window.location.host
  imgSource:string='https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png'
  isButtonDisabled:boolean=false

  ngOnInit(): void {
  }

}
