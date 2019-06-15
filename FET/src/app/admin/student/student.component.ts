import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentList: Array<any> = [];

  constructor(
    private _dataService: DataService,
    private _toasterService: TosterService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    const req = {
      url: AppConfig.api.student.findAll,
      params: ''
    };
    this._dataService.post(req).subscribe((res: any) => {
      if (res.status) {
        this.studentList = res.data;
        this._toasterService.success(AppConfig.messages.success.register);
      } else {
        this._toasterService.error(res.message);
      }
    });
  }

}
