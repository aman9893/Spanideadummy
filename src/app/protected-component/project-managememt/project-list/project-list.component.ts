import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
declare var require: any;
import { environment as env } from '../../../../environments/environment';
import {Router} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { MyauthService } from 'src/app/Auth-service/authservice';
import { AddProjectComponent } from '../add-project/add-project.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public env = env;
  emplist;
  projectlist: any;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    public router: Router,
    public dataService: DataService, private authService: MyauthService) { }

  ngOnInit() {
    this.getProjectlist()
  }
  getProjectlist(): void {
    this.dataService.getProjectInfo()
      .subscribe(
      data => this.getEmpdata(data),
    )
  }

  getEmpdata(data) {
    console.log(data)
    this.projectlist = data;
  }

  addProject(Updatedata, data) {
    let updatedata = {
      data: Updatedata,
      flag: data
    }
    const dialogRef = this.dialog.open(AddProjectComponent, {
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