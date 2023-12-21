import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isActive: string | null = null;
  constructor(private router: Router) {}
  //isActive: string | null = null;
  setSortingOrder(order: string): void {
    // Your sorting logic here
    // This is where you can perform actions when a sorting order is selected
    console.log(`Sorting by: ${order}`);
    // You might want to emit an event or perform other actions based on the sorting order
  }

  setActive(item: string): void {
      this.isActive = item;
  }

  logout()
  {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['login']);
    Swal.fire
    (
      'Log Out Successfully',
      '',
      'success'
    )
  }
}
