import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-emp-attendance-details',
  templateUrl: './emp-attendance-details.component.html',
  styleUrls: ['./emp-attendance-details.component.css']
})
export class EmpAttendanceDetailsComponent implements OnInit {
  nativeWindow;

  constructor(public dialogRef: MatDialogRef<EmpAttendanceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public Updatedata: any, public dialog: MatDialog,
    public dataService: DataService) {
    this.nativeWindow = dataService.getNativeWindow();
  }

  ngOnInit() {
    console.log(this.Updatedata)
   }



  sendEmail(email) {
    this.nativeWindow.open("https://mail.google.com/mail?view=cm&tf=0(&to=" + email + "", '_blank');
  }
  CloseUpdateDialog(){
    this.dialogRef.close();
  }
}