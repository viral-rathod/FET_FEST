import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppConfig } from 'src/app/app.config';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  validationMessage = AppConfig.messages.validation;

  constructor(
    private _formBuilder: FormBuilder,
    private _dataService: DataService,
    private _toasterService: TosterService,
    private _router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  onSubmitForm() {
    if (!this.studentForm.valid) {
      this.validateForm(this.studentForm);
    } else if (this.studentForm.valid) {
      const req = {
        url: AppConfig.api.student.add,
        params: this.studentForm.value
      };
      this._dataService.post(req).subscribe((res: any) => {
        if (res.status) {
          this._toasterService.success(AppConfig.messages.success.register);
          // this.resetForm();
          this._router.navigate(['admin/dashboard']);
        } else {
          this._toasterService.error(res.message);
        }
      });
    }
  }

  private initializeForm() {
    this.studentForm = this._formBuilder.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        school_name: ['', Validators.required],
        mobile: '',
        email: '',
        imageUrl: '',
        address: this._formBuilder.group({
          addressLine1: '',
          country: '',
          state: '',
          city: '',
          pin_code: ''
        }),
        amenities: this._formBuilder.group({
          books: this._formBuilder.group({
            paid: false,
            price: null,
            paid_by: '',
            paid_at: ''
          }),
          stationary: this._formBuilder.group({
            paid: false,
            price: null,
            paid_by: '',
            paid_at: ''
          }),
          fee: this._formBuilder.group({
            paid: false,
            price: null,
            paid_by: '',
            paid_at: ''
          }),
          uniform: this._formBuilder.group({
            paid: false,
            price: null,
            paid_by: '',
            paid_at: ''
          })
        }),
      }
    );
  }

  private validateForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(filed => {
      const control = formGroup.get(filed);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

}
