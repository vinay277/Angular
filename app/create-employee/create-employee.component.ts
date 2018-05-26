import {Component, OnInit} from "@angular/core"
import {FormControl, FormGroup, FormBuilder} from "@angular/forms"
import {Validators} from "@angular/forms"

@Component({
  selector:"app-create",
  templateUrl:'./create-employee.component.html'
})

export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup
  constructor(private formBuilder:FormBuilder){}

  Validations() {
   this.employeeForm =  this.formBuilder.group({
        firstName: ['',Validators.required],
        middleName:['',Validators.required],
        lastName:['',Validators.required],
      age:['',Validators.required],
      dob:['',Validators.required]
   })

  //   this.employeeForm =  new FormGroup({
  //       firstName: new FormControl(),
  //       middleName:new FormControl(),
  //       lastName:new FormControl(),
  //     age:new FormControl(),
  //     dob:new FormControl(),
  //  })
  }

  ngOnInit() {
    this.Validations();
  }

}