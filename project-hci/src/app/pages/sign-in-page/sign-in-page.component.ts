import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      // email: new FormControl('', Validators.required),
      // password: new FormControl('', Validators.required)
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      this.authService.logOut();
      this.router.navigate(['sign-in'])
    }

  }

  get password() {
    return this.loginForm.get('password')
  }
  get email() {
    return this.loginForm.get('email')
  }
  login() {
    if (this.loginForm.invalid) {
      // this.authService.logOut();
      this.router.navigate(['sign-in'])
    }
    this.authService.logIn();


  }


}
