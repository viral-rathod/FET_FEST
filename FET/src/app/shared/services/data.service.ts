import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../environments/environment";
const httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  get(req: any) {
    const url = environment.serverUrl + req.url;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getById(req: any) {
    const params = new HttpParams().set("id", req.params.id);
    const url = environment.serverUrl + req.url;
    return this.http.get(url, { params }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  post(req: any) {
    const url = environment.serverUrl + req.url;
    return this.http.post(url, req.params, httpOptions).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
