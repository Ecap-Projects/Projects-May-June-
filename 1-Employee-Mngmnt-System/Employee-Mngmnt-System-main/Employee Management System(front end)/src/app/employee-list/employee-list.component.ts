import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'contact', 'email', 'department', 'age', 'actions'];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.dataSource = new MatTableDataSource(this.employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      this.dataSource.data = this.employees;
    });
  }

  // Add this function for filtering
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  updateEmployee(id: any) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }

  employeeDetails(id: any) {
    this.router.navigate(['employee-details', id]);
  }
}
  


