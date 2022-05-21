import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private http: HttpClient) {

    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required,]],
      dayd: ['', [Validators.required]],
      monthd: ['', [Validators.required]],
      yeard: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      box1: [false, [Validators.requiredTrue]],
      box2: [false, [Validators.requiredTrue]]
    },

      {
        validators: this.MustMatch('password', 'confirmpassword')

      });

  }

  ngOnInit(): void {

  }

  get f() { return this.signupForm.controls; }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      // console.log(controlName, matchingControlName)
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // set error on matchingControl if validation fails
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }

  }
  onSubmit(users: User): void {
    console.log(users)

    console.log(this.signupForm);
    this.submitted = true;

    //stop here if form is invalid
    if (this.signupForm.invalid) {
      // return;
      this.router.navigate(['sign-up'])
      this.authService.logOut()
      return
    }
    else {
      this.http.post('https://project-hci-d1a10-default-rtdb.firebaseio.com/users.json', users)
        .subscribe((res) => {
          console.log(res)

        })
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));




    }
    console.log(this.signupForm.valid ? true : false)

  }
  // get email() {
  //   return this.signupForm.get('email')
  // }
  // get password() {
  //   return this.signupForm.get('password')
  // }
  // get dayd() {
  //   return this.signupForm.get('dayd')
  // }
  // get name() {
  //   return this.signupForm.get('name')
  // }
  // get monthd() {
  //   return this.signupForm.get('monthd')
  // }
  // get yeard() {
  //   return this.signupForm.get('yeard')
  // }
  login() {
    if (this.signupForm.invalid) {
      // this.authService.logOut();
      this.router.navigate(['sign-up'])
      this.authService.logOut();
    }
    else {
      this.authService.logIn();
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));


    }



  }

}
export class User {
  email = "";
  password = "";
  birthD = '';
  birthM = '';
  birthY = ""

}



