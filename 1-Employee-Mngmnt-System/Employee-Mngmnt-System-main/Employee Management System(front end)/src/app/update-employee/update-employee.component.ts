import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();
  updateSuccess: boolean = false; // Step 1: Add a boolean property

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.updateSuccess = true; // Step 3: Set the updateSuccess flag to true
      
      this.goToEmployeeList();
    }, 
    error => console.log(error));
    

  }
  cancel() {
    this.router.navigate(['/employee-list']); // You can change the route as needed
  }
  
  goToEmployeeList() {
    setTimeout(() => {
      this.router.navigate(['/employees']); // Step 2: Redirect to employee list after a few seconds
    }, 3000); // Optional: Set a timeout (e.g., 3000 milliseconds = 3 seconds)
  }
}
