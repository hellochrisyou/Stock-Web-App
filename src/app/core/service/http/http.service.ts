import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyValuePair } from '@shared/interface/dto.interface';
import { SearchHistory } from '@shared/interface/models';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import * as GLOBAL from '@shared/const/url.const';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line: variable-name
  private iexUrl = GLOBAL.APIURL.iex;
  private chartUrl = GLOBAL.APIURL.chart;
  // tslint:disable-next-line: variable-name
  private api_url = GLOBAL.APIURL.iex
  // tslint:disable-next-line: variable-name
  private token = '&token=Tsk_1ad1e73bfed34883a302621bf10db807';
  private token2 = '?token=Tsk_1ad1e73bfed34883a302621bf10db807';
  
  thisSearchHistory: SearchHistory = {}

  constructor(private http: HttpClient) { }

  // REFACTOR BY ADDING URL TO PARAMETER
  public getIex(value: string) {
    const fullIexUrl = this.iexUrl + value + this.token;
    console.log(fullIexUrl);
    return this.http.get<KeyValuePair>(fullIexUrl).pipe(      
      retry(3),
      catchError(this.handleError));
  }

  public getChart(value: string) {
    const chartFullUrl = this.chartUrl + value + '/chart/1y' + this.token2;
    return this.http.get<KeyValuePair[]>(chartFullUrl).pipe(
      retry(3),
      catchError(this.handleError));
  }

  public getUser(id: string) {}

  public getAll(url: string , email: string): Observable<any> {    
    // const findSearchHistory = `http://localhost:8080/api/history/findSearchHistory/${email}`;
    return this.http.post(url, email, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public postSearchHistory(url: string, value: string): Observable<any> {
    const fullUrl = url + value + this.token;
    this.thisSearchHistory.email = 'dd@d.com';
    this.thisSearchHistory.url = fullUrl;
    this.thisSearchHistory.name = value;
    return this.http.post<any>(url, this.thisSearchHistory, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public postClearHistory(url: string, value: string): Observable<any> {    
    return this.http.post<any>(url, value, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public put(url: string, value): Observable<any> {
    return this.http.put<any>(url, value, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
