import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../../service/data.service';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { MyauthService } from '../../../Auth-service/authservice';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(
    private formBuilder: FormBuilder, private dataService: DataService, public cookieService: CookieService,
    private snackBar: MatSnackBar, public router: Router, private authService: MyauthService) { }

  loginForm: FormGroup;

  cookieValue = 'UNKNOWN';

  ngOnInit() {
    this.createForm();
 
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({

      email: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }

  getError() {
    return ' *This is required feild'
  }
  cancel(): void {
    this.loginForm.reset();
  }

  onSubmit() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.dataService.loginData(this.loginForm.value).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    }
    this.loginForm.reset();
  }

  closeDialog(data) {
    console.log(data)
    if (data.status === true) {
      this.userData=data.data
      console.log(this.userData)

      this.authService.sendToken(data.token)

      this.cookieService.set('usersinfo', data.data);
    
      this.router.navigate(['/dashboard']);
      this.openSnackBar(data.message, 'Dissmiss')

      this.cookieValue = this.cookieService.get('usersinfo');

      console.log(this.cookieValue )

    }

    if (data.status === false) {
      this.openSnackBar(data.message, 'Dissmiss')
    }
    console.log(data.messsage)
  }
}
