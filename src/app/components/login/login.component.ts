import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationserviceService } from '../../services/authenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = {};
  loginError: string;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationservice: AuthenticationserviceService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      dashboard_id: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authenticationservice.logout();
  }

  get email() {return this.loginForm.get('email');}
  get dashboard_id() {return this.loginForm.get('dashboard_id');}
  get password() {return this.loginForm.get('password');}

  onSubmit () {
    this.submitted = true;
    this.loading = true;
    this.authenticationservice.login(this.email.value, this.dashboard_id.value, this.password.value).subscribe(data => {
        if (this.authenticationservice.isLoggedIn) {
          const redirect = this.authenticationservice.redirectUrl ? this.authenticationservice.redirectUrl : '/';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }

}
