import { Injectable } from "@angular/core";
import { ActiveUserModel } from "../../models/active-user.model";

@Injectable({
  providedIn: "root"
})
export class ActiveUserService {

  activeUserModel: ActiveUserModel;
  token: string;
  constructor() {
    this.activeUserModel = new ActiveUserModel();
    this.init();
  }

  init() {
    if (
      this.activeUserModel.isActive === null ||
      !this.activeUserModel.isActive
    ) {
      const user = localStorage.getItem("currentUser");
      if (user !== null) {
        this.activeUserModel = JSON.parse(user);
      }
    }
  }

  setUser(user: ActiveUserModel): void {
    this.activeUserModel = user;
  }
  getUser() {
    return this.activeUserModel;
  }

  clearUser() {
    this.activeUserModel = new ActiveUserModel();
    localStorage.clear();
  }

  logout() {
    localStorage.removeItem("currentUser");
  }
}
