import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

interface Employe {

  id: Number;

  fname: String;

  lname: String;

  email: String;

 

}

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {

  

  constructor() {}

  ngOnInit() {
    
  }

  employes:Employe[]=[
    {
      id: 1,
      fname: "Hardik",
      lname:"xyz"
,      email: "hardik@gmail.com",
    },
    {
      id: 2,
      fname: "Hardik",
      lname:"xyz"
,      email: "hardik@gmail.com",
    },
    {
      id: 3,
      fname: "Hardik",
      lname:"xyz"
,      email: "hardik@gmail.com",
    },
    {
      id: 4,
      fname: "Hardik",
      lname:"xyz",
      email: "hardik@gmail.com",
    }
  ]

  deleteEmployee(id: number) {
    
  }

  employeeDetails(id: number){
    
  }
}