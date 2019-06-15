import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { ActiveUserService } from 'src/app/shared/services/active-user.service';
import { AppConfig } from 'src/app/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  validationMessage = AppConfig.messages.validation;

  constructor(
    private _formBuilder: FormBuilder,
    private _dataService: DataService,
    private _toasterService: TosterService,
    private _router: Router,
    private _activeUserService: ActiveUserService
  ) {
    this.initializeForm();
  }

  ngOnInit() {
  }

  onSubmitForm() {
    if (!this.signinForm.valid) {
      this.validateForm(this.signinForm);
    } else if (this.signinForm.valid) {
      const req = {
        url: AppConfig.api.auth.sign_in,
        params: this.signinForm.value
      };
      this._dataService.post(req).subscribe((res: any) => {
        if (res.status) {
          this._activeUserService.setUser(res.data);
          this._toasterService.success(AppConfig.messages.success.register);
          this._router.navigate(['admin/dashboard']);
        } else {
          this._toasterService.error(res.message);
        }
      });
    }
  }

  private initializeForm() {
    this.signinForm = this._formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
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
