import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  dataOfTextfield:string=''
  showH1:string='show'

  color='blue'//green, blue

  tableDataArray=[
    {
      name:'shashank',
      age:21,
    },
    {
      name:'krupa',
      age:23,
    },
    {
      name:'karthik',
      age:32,
    },
    {
      name:'ram',
      age:22,
    },
    {
      name:'krishna',
      age:24,
    }
  ]
  userslistTrack(index:number, user:any):string{
    return user.name
  }
  addItemInList(){
    this.tableDataArray.push({
      name:'new name',
      age:20
    })
  }
  refreshTable(){
    this.tableDataArray=[
      {
        name:'shashank',
        age:21,
      },
      {
        name:'krupa',
        age:23,
      },
      {
        name:'karthik',
        age:32,
      }
    ]
  }
 
  //********* */
  case="black"
 

  onClickYellow(){
    return this.case="yellow"
  }
  onClickPurple(){
    return this.case="purple"
  }
  onClickBrown(){
   return this.case="brown"
  }
  onClickDarkgrey(){
   return this.case="darkgray"
  }
}
