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
  signupform: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupform = this.fb.group({
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



    // {
    //   validators: this.MustMatch('password', 'confirmpassword')
    // });
  }


  // {
  //   validators: this.MustMatch('password', 'confirmpassword')

  // });





  ngOnInit(): void {
    // this.initializeform();
  }



  get f() { return this.signupform.controls; }
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
  onsubmit(): void {
    console.log(this.signupform);
    this.submitted = true;

    //stop here if form is invalid
    if (this.signupform.invalid) {
      // return;
      this.router.navigate(['sign-up'])
    }
    else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupform.value, null, 4));


    }
    console.log(this.signupform.valid ? true : false)

  }
  get email() {
    return this.signupform.get('email')
  }
  get password() {
    return this.signupform.get('password')
  }
  get dayd() {
    return this.signupform.get('dayd')
  }
  get name() {
    return this.signupform.get('name')
  }
  get monthd() {
    return this.signupform.get('monthd')
  }
  get yeard() {
    return this.signupform.get('yeard')
  }
  login() {
    if (this.signupform.invalid) {
      // this.authService.logOut();
      this.router.navigate(['sign-up'])
    }
    this.authService.logIn();


  }

}




