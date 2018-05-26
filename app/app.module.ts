import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeService} from './employee/employee.service';
import {CreateEmployeeComponent} from './create-employee/create-employee.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeComponent, CreateEmployeeComponent ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
