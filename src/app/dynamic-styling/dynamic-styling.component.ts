import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  templateUrl: './dynamic-styling.component.html',
  styleUrls: ['./dynamic-styling.component.css']
})
export class DynamicStylingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=[
     {
       name:'rohit',
       dept:'management',
       salary:2000
     },
     {
      name:'navin',
      dept:'management',
      salary:10000
    },
     {
      name:'shubam',
      dept:'marketing',
      salary:3000
    },
    {
      name:'karthik',
      dept:'marketing',
      salary:4000
    },
    {
      name:'aishwarya',
      dept:'marketing',
      salary:5000
    }
  ]

}
