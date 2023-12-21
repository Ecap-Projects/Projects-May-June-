import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  
  {path: '', component: NavbarComponent,canActivate: [AuthGuard],
  children :
  [
  //for employees path it will redirect to EmployeeListComponent component
  // {path: 'navbar', component: NavbarComponent},
  {path: 'employee-list', component: EmployeeListComponent,canActivate: [AuthGuard]},
  {path: 'create-employee', component: CreateEmployeeComponent},
  // { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
 
  //for a empty path it will redirect to employee path which will redirect to EmoployeeListComponent
  // {path: '', redirectTo:'employees',pathMatch:'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
  // { path: 'profile/:id', component:ProfileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
