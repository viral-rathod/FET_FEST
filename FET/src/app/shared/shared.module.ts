import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { ToastrModule } from "ngx-toastr";
import { TosterService } from './services/toster.service';
import { ActiveUserService } from './services/active-user.service';

const toastOption = {
  positionClass: "toast-bottom-right"
};

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrModule.forRoot(toastOption)],
  providers: [
    DataService,
    ActiveUserService,
    TosterService
  ]
})
export class SharedModule { }
