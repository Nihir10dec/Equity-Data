import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Employee {
  id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image: string,
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://dummy.restapiexample.com/api/v1/";

  constructor(private Http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.Http.get<Employee[]>(this.url + "employees");
  }

  getEmpById(id : number) : Observable<Employee>{
    return this.Http.get<Employee>(this.url + "employee/" + id);
  }

}
