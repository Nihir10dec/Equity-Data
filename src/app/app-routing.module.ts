import { CheckloggedinGuard } from './checkloggedin.guard';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent , canActivate : [CheckloggedinGuard] },
  { path: 'employee/:id', component: EmployeedetailComponent , canActivate : [CheckloggedinGuard] },
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
