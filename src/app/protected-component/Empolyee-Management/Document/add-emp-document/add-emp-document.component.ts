import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-add-emp-document',
  templateUrl: './add-emp-document.component.html',
  styleUrls: ['./add-emp-document.component.css']
})
export class AddEmpDocumentComponent implements OnInit {

  

  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
    public dialogRef: MatDialogRef<AddEmpDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public update_data: any, public snackBar: MatSnackBar) { }


  formStatus = false;
  saveFlag = true;
  empAddForm: FormGroup;
  updateValue;
  updateFlag = true;
  imageUpload = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
    console.log(this.update_data.flag)
    if (this.update_data.flag === 'save') {
      this.updateFlag = false;
    }

    if (this.update_data !== null) {
      this.updateValue = this.update_data[0]
    }

    this.createForm();
  }

  private createForm() {

    this.empAddForm = this.formBuilder.group({

      last_company_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),

      total_experience: new FormControl(''),
    });

    if (this.updateValue !== undefined) {
      this.empAddForm.controls['first_name'].setValue(this.updateValue.first_name)
    }
  }

  getError() {
    return ' *This is required feild'
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  empNameValid() {
    return " Empolyee Name  is Required Feild"
  }
  empEmailValid() {
    return " Enter  valid Email id"
  }

  empPhoneValid() {
    return " phone is Required Feild"
  }

  formData: any;
  imageDataList;

  upload() {
    this.formData = new FormData();
    const files: Array<File> = this.filesToUpload;

    this.formData.append("uploads[]", files[0], files[0]['name']);

    this.dataService.uploadimage(this.formData)
      .subscribe(
        data => this.imageData(data)
      )
  }
  //---------------------------------------------add file -------------------------------------
  imageData(data) {
    this.imageDataList = data
    console.log(this.imageDataList)
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput.target.files)
    let fileInputs = fileInput.target.files;
    if (fileInputs[0].size > 1048576) {
      let message = "File size should be less then 1 MB."
      this.openSnackBar(message, 'Dismiss')
      return;
    }

    if (fileInputs[0].size < 1048576) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.imageUpload = fileInput.target.files[0]['name'];
      console.log(this.imageUpload)
    }
  }

  //---------------------------------------------add file end -------------------------------------
  onSubmit() {
    if (this.empAddForm.valid) {
      console.log(this.empAddForm.value)
      console.log(this.imageUpload)
      let empAddFormData = {
        prefix: this.empAddForm.controls['prefix'].value,
        profile: this.imageUpload,
      }

      console.log(empAddFormData)
      this.dataService.addEmpolyeeInfo(empAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    }
    this.empAddForm.reset();
  }

  closeDialog(data) {
    console.log(data)
    this.openSnackBar(data.message, 'Dissmiss')
    this.dialogRef.close(data);
  }
  cancel(): void {
    this.empAddForm.reset();
    this.dialogRef.close();
  }

  onUpdate() {
    if (this.empAddForm.valid) {
      console.log(this.empAddForm.value)
      let empAddFormData = {
        emp_id:this.updateValue.emp_id,
        prefix: this.empAddForm.controls['prefix'].value
      }

      console.log(empAddFormData)
      this.dataService.UpdateEmpolyeeInfo(empAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    }
    this.empAddForm.reset();
  }
}
