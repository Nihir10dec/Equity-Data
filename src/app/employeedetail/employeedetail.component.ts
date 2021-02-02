import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

  employee : Employee;
  employees : Employee[];

  constructor(private _activatedRoute: ActivatedRoute , private empserv : EmployeeService ) { }

   ngOnInit() {
    let id: string = this._activatedRoute.snapshot.params['id'];
    let empid : number = parseInt(id);
    
    this.empserv.getEmpById(empid).subscribe(data => {
      console.log(data)
      if(data['status'] === 'success'){
        this.employee = data['data']
      }
    } , err=>{
      console.log("inside the error block of details")
      this.empserv.getAllEmployees().subscribe(d => this.employees = d['data'] , err=> this.employee = history.state.data);
      [ this.employee ]= this.employees.filter(e => e.id === empid);
    } , );
          
  }

}
