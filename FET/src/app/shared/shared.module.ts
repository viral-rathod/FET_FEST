import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { ToastrModule } from "ngx-toastr";
import { TosterService } from './services/toster.service';

const toastOption = {
  positionClass: "toast-bottom-right"
};

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrModule.forRoot(toastOption)],
  providers: [
    DataService,
    TosterService
  ]
})
export class SharedModule { }
