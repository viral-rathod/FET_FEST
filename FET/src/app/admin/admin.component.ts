import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  activeUser: ActiveUserModel;

  constructor(private _activeUserService: ActiveUserService, private _router: Router) {
    this.activeUser = new ActiveUserModel();
    this.activeUser = this._activeUserService.getUser();
  }

  ngOnInit() {
  }

  onLogout() {
    this._activeUserService.logout();
    this._router.navigate(['/home']);
  }

}
