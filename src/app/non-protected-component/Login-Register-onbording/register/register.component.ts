import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from'../../../service/data.service';
import { MyauthService } from '../../../Auth-service/authservice';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userpassword: any;


  constructor(private snackBar: MatSnackBar,private myRoute: Router,
    private formBuilder: FormBuilder, private dataService: DataService,private authService2: MyauthService) { }

  sginupForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
  this.sginupForm = this.formBuilder.group({

    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(55)],
      updateOn: 'change'
    }),
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
  this.sginupForm.reset();
}

onSubmit() {

    // let userData = {
    //   name    :  this.username,
    //   email   :  this.useremail,
    //   password:  this.userpassword
    // }

    console.log(this.sginupForm.value)

    this.dataService.registerData(this.sginupForm.value).subscribe(
      data => this.closeDialog(data),
      err => console.log(err)
    )
  
  this.sginupForm.reset();
}

closeDialog(data) {
  console.log(data)
  if(data.status === true){
    if(this.userpassword)
    {
      this.authService2.sendToken(this.userpassword)
    }
   
    this.myRoute.navigate(['/admin']);
    this.openSnackBar(data.message, 'Dissmiss')

  }

  if(data.status ===false){
    this.openSnackBar(data.message, 'Dissmiss')
  }
   console.log(data.messsage)
  }
}
