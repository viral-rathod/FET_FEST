import { Component, OnInit, Input, Output } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-donate',
  templateUrl: './add-donate.component.html',
  styleUrls: ['./add-donate.component.scss']
})
export class AddDonateComponent implements OnInit {

  @Input() public student;
  studentForm: FormGroup;


  constructor(private _dataService: DataService, private _formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    this.initializeForm();
    console.log(this.student);
  }

  onSubmitForm() {
    const req = {
      url: AppConfig.api.student.update,
      params: this.studentForm.value
    };
    this._dataService.post(req).subscribe((res: any) => {
      if (res.status) {
        // this.studentList = res.data;
        // this._toasterService.success(AppConfig.messages.success.register);
      } else {
        // this._toasterService.error(res.message);
      }
    });
  }

  private initializeForm() {
    this.studentForm = this._formBuilder.group(
      {
        _id: '',
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
