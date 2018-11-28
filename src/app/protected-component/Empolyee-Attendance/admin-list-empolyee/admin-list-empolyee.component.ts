import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { EmpAttendanceDetailsComponent } from '../emp-attendance-details/emp-attendance-details.component';


@Component({
  selector: 'app-admin-list-empolyee',
  templateUrl: './admin-list-empolyee.component.html',
  styleUrls: ['./admin-list-empolyee.component.css']
})
export class AdminListEmpolyeeComponent implements OnInit {

  lossReasonData;
  showLoadingStatus = true;
  emplist;
  inOutStatus;
  color = 'primary';
  checked = false;
  disabled = false;
  device: boolean = true;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    this.getEmplist();
  }

  getEmplist(): void {
    this.dataService.getEmpAttendance()
      .subscribe(
      data => this.getEmpdata(data),
      error => this.getEmpdataerror(error)
      )
  }

  getEmpdata(data) {
    console.log(data)
    if(data.status === true){
      this.emplist = data.data;
      this.setEmpSubjectData(this.emplist )
    }
  
  }

  setEmpSubjectData(emplist){
    this.dataService.empList(emplist)
  }

  getEmpdataerror(error) {
    console.log("error")
  }

  stopPropagation(event) {
    console.log(event)
    event.stopPropagation()
  }

  detailsEmpolyee(empData): void {
    const dialogRef = this.dialog.open(EmpAttendanceDetailsComponent, {
      width: '550px',
      data:empData,
      panelClass:'empDialog',
      autoFocus:false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
