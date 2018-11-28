import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
declare var require: any;
import { environment as env } from '../../../../environments/environment';
import {Router} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { MyauthService } from 'src/app/Auth-service/authservice';
import { AddEmpolyeeComponent } from '../add-empolyee/add-empolyee.component';
@Component({
  selector: 'app-list-empolyee',
  templateUrl: './list-empolyee.component.html',
  styleUrls: ['./list-empolyee.component.css']
})
export class ListEmpolyeeComponent implements OnInit {
  public env = env;
  emplist;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    public router: Router,
    public dataService: DataService, private authService: MyauthService) { }

  ngOnInit() {
    this.getEmplist()
  }
  getEmplist(): void {
    this.dataService.getEmpoyeeInfo()
      .subscribe(
      data => this.getEmpdata(data),
    )
  }

  getEmpdata(data) {
    console.log(data)
    this.emplist = data;
  }

  addEmpolyee(Updatedata, data) {
    let updatedata = {
      data: Updatedata,
      flag: data
    }
    const dialogRef = this.dialog.open(AddEmpolyeeComponent, {
      width: '550px',
      data: updatedata
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'object') {
        if (result.status === true) {
          var lastInsertedData = result.data[0];
          console.log(lastInsertedData)
          console.log(this.emplist)
          this.emplist.push(lastInsertedData);
          console.log(this.emplist)
          // this.openSnackBar(result.message, 'Dissmiss')
        }
      }
    });
  }

  detailsEmpolyee(id) {
    console.log(id)
    this.router.navigate(['/empolyeeList', id]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}