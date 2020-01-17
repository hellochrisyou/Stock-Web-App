import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ADD_HISTORY } from '@shared/graphQL/query/mutation/history.mutation';
import { Apollo } from 'apollo-angular';
import { FetchResult } from 'apollo-link';
import { BaseHistory, HistoryInput, Response_History } from '@shared/interface/models';
import { ApolloQueryResult } from 'apollo-client';
import { throwError, of, Observable } from 'rxjs';
import { GRAPHQL_ERROR } from '@shared/const/error.const';
import { GET_ALL_HISTORY } from '@shared/graphQL/query/query/history.query';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private doFetch = true;

  constructor(protected apollo: Apollo) { }

  public query(argEmail: string) {
    return this.apollo
      .watchQuery<Response_History>({
        query: GET_ALL_HISTORY,
        variables: {
          email: argEmail
        },
        fetchPolicy: this.doFetch ? 'cache-and-network' : 'cache-first',
      })
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
