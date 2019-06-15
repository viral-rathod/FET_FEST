import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  schoolList: Array<any> = [];

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
      url: AppConfig.api.school.findAll,
      params: ''
    };
    this._dataService.post(req).subscribe((res: any) => {
      if (res.status) {
        this.schoolList = res.data;
        this._toasterService.success(AppConfig.messages.success.register);
        console.log()
      } else {
        this._toasterService.error(res.message);
      }
    });
  }

}
