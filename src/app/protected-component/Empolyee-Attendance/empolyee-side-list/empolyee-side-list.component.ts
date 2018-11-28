import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
declare var moment: any;
@Component({
  selector: 'app-empolyee-side-list',
  templateUrl: './empolyee-side-list.component.html',
  styleUrls: ['./empolyee-side-list.component.css']
})
export class EmpolyeeSideListComponent implements OnInit {

  showLoadingStatus = true;
  emplist;
  inOutStatus;
  color = 'primary';
  checked = false;
  disabled = false;
  device: boolean = true;
  attendance_data;
  total_time: any;
  attendanceData: any;
  total_minutes: number;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    // this.getEmplist();
    this.getEmplistList()
  }

  // getEmplist(): void {
  //   this.dataService.getEmpoyeeInfo()
  //     .subscribe(
  //       data => this.getEmpdata2(data),
  //       error => this.getEmpdataerror(error)
  //     )
  // }
  // getEmpdata2(data){
  //   console.log(data)
  //   this.emplist = data
  //   console.log(this.emplist)
  // }


  getEmplistList(): void {
    this.dataService.getEmpAttendance()
      .subscribe(
        data => this.getEmpdata(data),
        error => this.getEmpdataerror(error)
      )
  }
  getEmpdata(data) {
    this.emplist = data.data
    console.log(this.emplist)

  }


  time(emp_data) {
    var startTime = moment(emp_data.in_time);
    var endTime = moment(emp_data.out_time);
    console.log(startTime)
    console.log(endTime)
    var duration = moment.duration(moment(endTime).diff(startTime));
    var hours = duration.asHours();
    this.total_minutes = parseInt(duration.asMinutes())%60;
    console.log(hours);
    console.log(this.total_minutes)
    console.log(emp_data.total_time)
  }


  getEmpdataerror(error) {
    console.log("error")
  }

  ChangeStatus(event, emp_data) {
 
    this.time(emp_data)
    this.inOutStatus = event.checked
    if (this.inOutStatus === true) {
      this.attendance_data = {
        attendance_id: emp_data.attendance_id,
        emp_live_status: this.inOutStatus,
        out_time: '',
        in_time: new Date(),
        emp_new_id: emp_data.emp_new_id,
        total_time:''
      }
    }

    else {
      this.attendance_data = {
        attendance_id: emp_data.attendance_id,
        emp_live_status: this.inOutStatus,
        out_time: new Date(),
        in_time: emp_data.in_time,
        emp_new_id: emp_data.emp_new_id,
        total_time: '',
      }
    }
    this.dataService.updateAttendanceStatus(this.attendance_data).subscribe(
      data => this.updateCheckStatusData(data),
      error => this.updateCheckStatusError(error)
    )
  }
  updateCheckStatusData(data) {
    console.log(data)
  }

  updateCheckStatusError(error) {
    console.log(error)
    this.getEmplistList();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}
