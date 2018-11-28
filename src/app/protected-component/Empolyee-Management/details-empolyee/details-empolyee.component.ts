

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
import { AddDeleteSalaryComponent } from '../Salary/add-delete-salary/add-delete-salary.component';
import { AddEmpolyeeComponent } from '../add-empolyee/add-empolyee.component';
import { AddEmpSalaryComponent } from '../Salary/add-emp-salary/add-emp-salary.component';
import { AddTimelineInfoComponent } from '../Emp-timeline/add-timeline-info/add-timeline-info.component';
import { AddEmpDocumentComponent } from '../Document/add-emp-document/add-emp-document.component';
@Component({
  selector: 'app-details-empolyee',
  templateUrl: './details-empolyee.component.html',
  styleUrls: ['./details-empolyee.component.css']
})
export class DetailsEmpolyeeComponent implements OnInit {
  paramsData;
  empData: any;
  constructor(private route: ActivatedRoute, public dialog: MatDialog,
    private back_location: Location, public dataService: DataService) { }

  emplistData;
  Empolyeelist;
  delete_id;
  public env = env;

  ngOnInit() {
    console.log(this.paramsData)
    this.getPersonDetails()
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

  addSalaryDialog() {
    const dialogRef = this.dialog.open(AddEmpSalaryComponent, {
      width: '550px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

  addTimelineDialog() {

    const dialogRef = this.dialog.open(AddTimelineInfoComponent, {
      width: '550px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
  
  addDocumentDialog() {
    const dialogRef = this.dialog.open(AddEmpDocumentComponent, {
      width: '550px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
  



}