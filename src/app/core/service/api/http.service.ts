import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import * as GLOBAL_URL from '@shared/const/url.const';
import { throwError, Observable } from 'rxjs';
import { KeyValuePair } from '@shared/interface/dto.interface';
import { ErrorHandlerGlobal } from 'app/core/error-handler/error-handler';
import { BaseHistory } from '@shared/interface/models';

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  errorHandlerGlobal = new ErrorHandlerGlobal();

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

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  // REFACTOR BY ADDING URL TO PARAMETER
  public get(value: string) {
    // this.fullUrl = this.api_url + value + this.token;
    console.log(this.fullUrl);
    return this.http.get<KeyValuePair>(this.fullUrl).pipe(
      // retry sending the request for 3 extra time
      retry(3),
      // error handling
      catchError(this.handleError));
  }

  public getChart(value: string) {
    this.fullUrl = this.chart_url + value + '/chart/5y' + this.token2;
    return this.http.get<KeyValuePair[]>(this.fullUrl).pipe(
      // retry sending the request for 3 extra time
      retry(3),
      // error handling
      catchError(this.handleError));
  }

  public getUser(id: string) {}

  public getAll(url: string , pathVar: string): Observable<BaseHistory[]> {
    return this.http.get<any[]>(url, httpOptions).pipe(catchError(this.handleError));
  }

  public post(url: string, bodyParam): Observable<any> {
    return this.http.post(url, bodyParam, httpOptions).pipe(
      map(this.extractData),
      catchError(this.errorHandlerGlobal.handleError)
    );
  }

  public put(url: string, bodyParam): Observable<any> {
    return this.http.put(url, bodyParam, httpOptions).pipe(
      map(this.extractData),
      // catchError(this.handleError)
      catchError(this.errorHandlerGlobal.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}` + `Error message is: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
