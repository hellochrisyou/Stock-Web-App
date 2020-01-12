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

  // tslint:disable-next-line: variable-name
  private _fullUrl = '';
  // tslint:disable-next-line: variable-name
  private _api_url = GLOBAL_URL.SECTOR_TYPES;
  // tslint:disable-next-line: variable-name
  private _chart_url = GLOBAL_URL.CHART;
  // tslint:disable-next-line: variable-name
  private _token = '&token=Tsk_1ad1e73bfed34883a302621bf10db807';
  private token2 = '?token=Tsk_1ad1e73bfed34883a302621bf10db807';
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

  public get chart_url() {
    return this._chart_url;
  }
  public set chart_url(value) {
    this._chart_url = value;
  }

  public get fullUrl() {
    return this._fullUrl;
  }
  public set fullUrl(value) {
    this._fullUrl = value;
  }

  constructor(private http: HttpClient) { }

  // REFACTOR BY ADDING URL TO PARAMETER
  public get(value: string) {
    this.fullUrl = this.api_url + value + this.token;
    return this.http.get<KeyValuePair>(this.api_url + value + this.token).pipe(
      // retry sending the request for 3 extra time
      retry(3),
      // error handling
      catchError(this.handleErrors));
  }

  public getChart(value: string) {
    this.fullUrl = this.chart_url + value + '/chart/5y' + this.token2;
    return this.http.get<KeyValuePair[]>(this.chart_url + value + '/chart/1y' + this.token2).pipe(
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
      console.log('An error occured: ', error.error.message);
    } else {
      // for any backend related issues
      console.log(`Backend returnd code ${error.status}`);
    }

    return throwError('Something bad happened');
  }
}
