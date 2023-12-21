import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { faEye, faGhost } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../AuthGuard/auth.service';
// import Validation from './utils/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   faEye = faEye;
   faGhost = faGhost;
  redirectUrl: any = '';
  loginObj: any;

  constructor(private router: Router, private auth: AuthService, private activatedRoute: ActivatedRoute)
  {  }

  ngOnInit() : void{
    this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl') || 'employee'
  }

  loginForm= new FormGroup
  ({
    mail: new FormControl('',[Validators.required,Validators.email]),      //,Validators.pattern('[a-zA-Z@]+$')
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  });

  get mail()
  {
    return this.loginForm.get('mail');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  userLogin()
  {
    if (this.loginForm.invalid)
    {
      console.log(JSON.stringify(this.loginForm.value, null, 2));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'INVALID DETAILS !'
      })
    }
    else
    {
      this.auth.login().then(() => {
        // Example: Get user role from AuthService
        const userRole = this.auth.getUserRole();

        // Set redirectUrl based on user role
        if (userRole === 'admin') {
          this.redirectUrl = '/admin-dashboard';
        } else {
          this.redirectUrl = '/employee-list';
        }

        this.router.navigateByUrl(this.redirectUrl);
      });
    }
  }

  active = false;

  toggleShow() {
    this.active = !this.active;
  }
}