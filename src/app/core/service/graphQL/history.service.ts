import { Injectable } from '@angular/core';
import { ADD_HISTORY } from '@shared/graphQL/query/mutation/history.mutation';
import { HistoryInput } from '@shared/interface/models';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, WatchQueryOptions } from 'apollo-client';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private doFetch = true;

  constructor(protected apollo: Apollo) { }

  public query<T>(options: WatchQueryOptions): Observable<ApolloQueryResult<T>>  {
    return this.apollo.watchQuery<T>(
      options
    ).valueChanges
      .pipe(
        // tap((r) => {
        //   console.log('XXX TAP:', r);
        // }),
        filter(result => !result.loading),
        catchError((e: any) => {
          return throwError(this.getApolloErrors(e));
        })
      );
  }

  public getApolloErrors(err: any): string[] {
    // console.log('XXX api request error:', err);
    if (err.graphQLErrors) {
      return err.graphQLErrors.length > 0 ? err.graphQLErrors.length : [err.message];
    }
    if (err.networkError) {
      return [err.networkError.message];
    }
    return ['Undefined Apollo/Graphql error'];
  }

  public mutate(history: HistoryInput[]) {
    return this.apollo.mutate({
      mutation: ADD_HISTORY,
      variables: {
        history: history
      }
    })
    // .pipe(map((result) => result.data ));
  }
}
