import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
    public dialogRef: MatDialogRef<AddEmpolyeeComponent>,
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

      first_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),

      prefix: new FormControl(''),

      middle_name: new FormControl(''),

      last_name: new FormControl(''),

      dateOfbirth: new FormControl(''),

      address: new FormControl(''),

      imp_notes: new FormControl(''),

      addhar_number: new FormControl(''),

      pancard_number: new FormControl(''),

      joing_date: new FormControl(''),

      gendar: new FormControl(''),

      profile: new FormControl(''),

      emp_title: new FormControl(''),

      emp_description: new FormControl(''),
      emp_department: new FormControl(''),
      emp_unique_id: new FormControl(''),

      phone_number: new FormControl('', {
        // validators: [Validators.required, Validators.maxLength(55)],
        // updateOn: 'change'
      }),

      email: new FormControl('', {
        // validators: [Validators.pattern("[^ @]*@[^ @]*"), Validators.required],
        // updateOn: 'change'
      }),
    });

    if (this.updateValue !== undefined) {
      this.empAddForm.controls['first_name'].setValue(this.updateValue.first_name)
      this.empAddForm.controls['prefix'].setValue(this.updateValue.prefix)
      this.empAddForm.controls['dateOfbirth'].setValue(new Date(this.updateValue.date_of_birth))
      this.empAddForm.controls['joing_date'].setValue(new Date(this.updateValue.joing_date))
      this.empAddForm.controls['email'].setValue(this.updateValue.email)
      this.empAddForm.controls['emp_department'].setValue(this.updateValue.emp_department)
      this.empAddForm.controls['emp_description'].setValue(this.updateValue.emp_description)
      this.empAddForm.controls['emp_title'].setValue(this.updateValue.emp_title)
      this.empAddForm.controls['gendar'].setValue(this.updateValue.gendar)
      this.empAddForm.controls['imp_notes'].setValue(this.updateValue.imp_notes)
      this.empAddForm.controls['last_name'].setValue(this.updateValue.last_name)
      this.empAddForm.controls['middle_name'].setValue(this.updateValue.middle_name)
      this.empAddForm.controls['pancard_number'].setValue(this.updateValue.pan_number)
      this.empAddForm.controls['phone_number'].setValue(this.updateValue.phone)
      this.empAddForm.controls['address'].setValue(this.updateValue.address)
      this.empAddForm.controls['addhar_number'].setValue(this.updateValue.addar_number)
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
        first_name: this.empAddForm.controls['first_name'].value,
        middle_name: this.empAddForm.controls['middle_name'].value,
        last_name: this.empAddForm.controls['last_name'].value,
        date_of_birth: this.empAddForm.controls['dateOfbirth'].value,
        email: this.empAddForm.controls['email'].value,
        phone: this.empAddForm.controls['phone_number'].value,
        address: this.empAddForm.controls['address'].value,
        imp_notes: this.empAddForm.controls['imp_notes'].value,
        addar_number: this.empAddForm.controls['addhar_number'].value,
        pan_number: this.empAddForm.controls['pancard_number'].value,
        joing_date: this.empAddForm.controls['joing_date'].value,
        emp_title: this.empAddForm.controls['emp_title'].value,
        emp_description: this.empAddForm.controls['emp_description'].value,
        gendar: this.empAddForm.controls['gendar'].value,
        emp_department: this.empAddForm.controls['emp_department'].value,
        emp_unique_id: this.empAddForm.controls['emp_unique_id'].value,
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
        prefix: this.empAddForm.controls['prefix'].value,
        first_name: this.empAddForm.controls['first_name'].value,
        middle_name: this.empAddForm.controls['middle_name'].value,
        last_name: this.empAddForm.controls['last_name'].value,
        date_of_birth: this.empAddForm.controls['dateOfbirth'].value,
        email: this.empAddForm.controls['email'].value,
        phone: this.empAddForm.controls['phone_number'].value,
        address: this.empAddForm.controls['address'].value,
        imp_notes: this.empAddForm.controls['imp_notes'].value,
        addar_number: this.empAddForm.controls['addhar_number'].value,
        pan_number: this.empAddForm.controls['pancard_number'].value,
        joing_date: this.empAddForm.controls['joing_date'].value,
        emp_title: this.empAddForm.controls['emp_title'].value,
        emp_description: this.empAddForm.controls['emp_description'].value,
        gendar: this.empAddForm.controls['gendar'].value,
        emp_department: this.empAddForm.controls['emp_department'].value,
        emp_unique_id:this.updateValue.emp_unique_id,
        profile: this.updateValue.profile,
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
