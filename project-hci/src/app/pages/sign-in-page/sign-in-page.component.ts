import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      // email: new FormControl('', Validators.required),
      // password: new FormControl('', Validators.required)
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {

  }

  onsubmit(): void {
    console.log(this.loginForm);
  }

  get password() {
    return this.loginForm.get('password')
  }
  get email() {
    return this.loginForm.get('email')
  }

}
