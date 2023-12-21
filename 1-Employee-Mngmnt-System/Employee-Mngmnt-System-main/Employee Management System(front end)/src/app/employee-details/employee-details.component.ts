import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employeeId!: number;
  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,  // Inject Router
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      this.getEmployeeDetails();
    });
  }

  getEmployeeDetails() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data: Employee) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error fetching employee details', error);
      }
    );
  }
}
