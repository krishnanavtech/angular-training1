import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  constructor() { }
  PageName="This is page two way data binding"
  dataOfTextfield:any=""

  ngOnInit(): void {
  }
}
