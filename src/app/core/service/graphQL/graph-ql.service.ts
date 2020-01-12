import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { WatchQueryOptions, ApolloQueryResult } from 'apollo-client';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {

  constructor(public apollo: Apollo) {
  }

  public query<T>(options: WatchQueryOptions): Observable<ApolloQueryResult<T>> {
    return this.apollo.watchQuery<T>(
      options
    ).valueChanges
      .pipe(
        filter(result => !result.loading),
        catchError((x: any) => {
          return throwError(this.getErrors(x));
        })
      );
  }

  public getErrors(err: any): string[] {
    // console.log('XXX api request error:', err);
    if (err.graphQLErrors) {
      return err.graphQLErrors.length > 0 ? err.graphQLErrors.length : [err.message];
    }
    if (err.networkError) {
      return [err.networkError.message];
    }
    return ['Undefined Apollo/Graphql error'];
  }
}
