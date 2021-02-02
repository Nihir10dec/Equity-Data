import { Employee, EmployeeService } from './../employee.service';

import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  isError : boolean;
  constructor(private empserv : EmployeeService) {}
  

  ngOnInit() {
    this.empserv.getAllEmployees().subscribe(d => {
      // console.log(d);
      if (d['status']==='success'){
        this.employees = d['data'];
      }
    } , err=> {
      console.error("inside error block" , err);  
      this.isError = true;
    });

  }

  displayedColumns: string[] = ['Id', 'Name', 'Salary', 'Age', 'Image', 'Details'];
}
