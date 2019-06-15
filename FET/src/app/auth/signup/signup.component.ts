import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppConfig } from 'src/app/app.config';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _dataService: DataService,
    private _toasterService: TosterService
  ) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  onSubmitForm() {
    if (!this.signupForm.valid) {
      this.validateForm(this.signupForm);
    } else if (this.signupForm.valid) {
      const req = {
        url: AppConfig.api.auth.sign_up,
        params: this.signupForm.value
      };
      this._dataService.post(req).subscribe((res: any) => {
        if (res.status) {
          this._toasterService.success(AppConfig.messages.success.register);
          // this.resetForm();
        } else {
          this._toasterService.error(res.message);
        }
      });
    }
  }

  private initializeForm() {
    this.signupForm = this._formBuilder.group(
      {
        school_name: ['', Validators.required],
        address: this._formBuilder.group({
          addressLine1: '',
          country: '',
          state: '',
          city: '',
          pin_code: ''
        }),
        role: 'user',
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
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
