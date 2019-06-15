import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/app.config';
import { DataService } from 'src/app/shared/services/data.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  closeResult: string;

  studentList: Array<any> = [];
  constructor(
    private _dataService: DataService,
    private _toasterService: TosterService,
    private _router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getInitialData();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getInitialData() {
    const req = {
      url: AppConfig.api.student.findByAmenities,
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

  getStudent(item: any) {

  }
}
