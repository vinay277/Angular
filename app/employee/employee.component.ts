import {Component} from "@angular/core"

import {EmployeeService} from './employee.service'

@Component({
  selector:'app-employee',
  templateUrl:'./employee.component.html'
})

export class EmployeeComponent {
         list:any
  
   constructor(private employee:EmployeeService){}
     ngOnInit() {
       this.employee.getEmployee().subscribe((data)=>{
         this.list = data
       })
     }
}