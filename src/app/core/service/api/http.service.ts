import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import * as GLOBAL_URL from '@shared/const/url.const';
import { throwError } from 'rxjs';
import { KeyValuePair } from '@shared/interface/dto.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _api_url = GLOBAL_URL.SECTOR_TYPES;
  private _token = '&token=Tsk_1ad1e73bfed34883a302621bf10db807';

  public get api_url() {
    return this._api_url;
  }
  public set api_url(value) {
    this._api_url = value;
  }
  public get token() {
    return this._token;
  }
  public set token(value) {
    this._token = value;
  }

  constructor(private http: HttpClient) { }

  public get(value: string) {

    return this.http.get<KeyValuePair>(this.api_url + value + this.token).pipe(
      // retry sending the request for 3 extra time
      retry(3),
      // error handling
      catchError(this.handleErrors));
  }

  public getUser(id: string) {

    // return this.http.get<User>(`${this.api_url}${id}`).pipe(
    //   // retry sending the request for 3 extra time
    //   retry(3),
    //   // error handling
    //   catchError(this.handleErrors));
  }

  public handleErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side or network type of errors
      console.log("An error occured: ", error.error.message);
    } else {
      // for any backend related issues
      console.log(`Backend returnd code ${error.status}`);
    }

    return throwError('Something bad happened');
  };
}
