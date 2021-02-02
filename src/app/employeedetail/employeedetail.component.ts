import { Employee } from './../employees/employees.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

  employee : Employee;

  constructor(private _activatedRoute: ActivatedRoute , private Http : HttpClient) { }

  async ngOnInit() {
    let id: string = this._activatedRoute.snapshot.params['id'];
    // console.log("http://dummy.restapiexample.com/api/v1/employee/" + id);
    // let empid : number = parseInt(id);
    let obj = await this.Http.get("http://dummy.restapiexample.com/api/v1/employee/" + id).toPromise();
    this.employee = obj['data'];
    // console.log(this.employee);
  }

}
