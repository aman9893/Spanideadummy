

import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
declare var require: any;
import { environment as env } from '../../../../environments/environment';
import {
  MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent,
  MatAutocompleteModule, MatAutocompleteTrigger
} from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { DeleteEmpolyeeComponent } from '../delete-empolyee/delete-empolyee.component';
import { AddEmpolyeeComponent } from '../add-empolyee/add-empolyee.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-details-empolyee',
  templateUrl: './details-empolyee.component.html',
  styleUrls: ['./details-empolyee.component.css']
})
export class DetailsEmpolyeeComponent implements OnInit {
  paramsData;
  empData: any;
  nativeWindow: Window;
  cookieValue: any;
  constructor(private route: ActivatedRoute, public dialog: MatDialog,private cookieService:CookieService,
    private back_location: Location, public dataService: DataService) {

  this.nativeWindow = dataService.getNativeWindow();
     }

  emplistData;
  Empolyeelist;
  delete_id;
  public env = env;


  ngOnInit() {
    console.log(this.paramsData)
    this.getPersonDetails()
    this.cookieValue = this.cookieService.get('usersinfo');
    console.log(this.cookieValue )
  }

  openPhone(){
    window.open('tel:this.empData.phone');
  }
  
  openEmail(){
    var email =this.empData.email;
    var subject = 'Test';
    var emailBody = 'Hi,';
    var attach = 'path';
    window.location.href = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
        "?attach="+attach;

}


  getPersonDetails() {
    this.route.params.pipe(
      // (+) converts string 'id' to a number
      switchMap((params: ParamMap) => this.dataService.empolyeeInfoId(+Number(params['id']))))
      .subscribe((result) => this.showDetails(result));
  }

  showDetails(result) {
    this.Empolyeelist = result
    console.log(this.Empolyeelist)
    this.empData=this.Empolyeelist;
    this.delete_id = this.Empolyeelist[0].emp_id
  }
  goBack(): void {
    this.back_location.back();
  }

  deleteEmpoyee(Updatedata, data) {
    const dialogRef = this.dialog.open(DeleteEmpolyeeComponent, {
      width: '400px',
      autoFocus: false,
      data: this.delete_id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result !== undefined) {
        this.goBack()
      }
    });
  }

  editEmpoyee() {
    const dialogRef = this.dialog.open(AddEmpolyeeComponent, {
      width: '600px',
      autoFocus: false,
      data: this.Empolyeelist
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (typeof result === 'object') {
        if (result.status === true) {
          let lastInsertedData = result.data;
          let updatedData = this.Empolyeelist[0]
          console.log(lastInsertedData)
          console.log(updatedData)
          for (var i = 0; i < lastInsertedData.length; i++) {
            if (lastInsertedData[i].emp_id === updatedData.emp_id) {
              this.Empolyeelist = lastInsertedData;  
            }
          }
        }
      }
    });
  }
  sendEmail() {
    console.log(this.empData)
    this.nativeWindow.open("https://mail.google.com/mail?view=cm&tf=0(&to=" + this.empData[0].email + "", '_blank');
  }

}