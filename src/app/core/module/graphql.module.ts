import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const uri = 'http://dev.cosentios.com/ace/manifest/truck/ui-service/graphql';

export function provideApollo(httpLink: HttpLink) {

    const basicHeader = new HttpHeaders()
        .append('Ace-Carrier-Code', 'BDDD');

    // tslint:disable-next-line: max-line-length
    const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRbXJnbTg1aXJvbi1pNEhMVDJTTzkyZWdfa0xGOEQ5Q3J3QmxJenFTN2ZrIn0.eyJqdGkiOiIwYjgwMzE4My0xNjk0LTRjMmEtYjg3MS04N2IzZWRmMDE1NzMiLCJleHAiOjE1NzYwNzgwNDYsIm5iZiI6MCwiaWF0IjoxNTc2MDc0NDQ2LCJpc3MiOiJodHRwOi8vZGV2LmNvc2VudGlvcy5jb20vYWNlL21hbmlmZXN0L3RydWNrL2tleWNsb2FrL2F1dGgvcmVhbG1zL0FDRSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhYjk3Y2Q4MC1mNzdiLTQ3OGUtYjcyNy0wZDUzNjU4MzM4ZTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtYW5pZmVzdC10cnVjay10cmFkZS11aSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjllYzM5ZTU3LWFhZjktNGVjZC1iM2VjLTM3OTg2NDhjODljMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJmaXJzdE5hbWUiOiJBQkMiLCJsYXN0TmFtZSI6IlRFU1QiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfbmFtZSI6InRlc3QiLCJuYW1lIjoiQUJDIFRFU1QifQ.Tc_hZpjYgU55PD_-HDXR9_leli2B8oAN3BAVja4tU7xj5VHyosSVPHg70XaycSz47okbWxRdaIbvaA3APjj0Em0g133QPdo2RCMHK42PhXgMjD0scOFfLUyWT2dmvk3Cmx6E8CqXsKzmsvbnljHNtbyZ5hrm7TGARRFXePqdIdgth-g65trDdV5XkzvhI0oSN45SGt9axxqy3mP0mLnHTgqNsrqftEHB9W-oexdUeVs3uiFUSBdYGiZP3ds944z5pwiE0HkkdarCs4rW7RlnAx7Wpqd0kRG4iFN4bgM2cHf8wMOs4JNMJ7NGFm75kkOIvpFfBOTYUI5JiisCqsFhcQ';
    const basic = setContext((op, ctx) => ({
        headers: basicHeader
    }));

    const auth = setContext((operation, ctx) => ({
        headers: ctx.headers.append('Authorization', `Bearer ${TOKEN}`)
    }));

    // Error logger
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );
        }
        if (networkError) {
            console.log('[Network error]', networkError);
            console.log('[graphQLErrors]', graphQLErrors);
        }
    });

    const link = ApolloLink.from([basic, auth, errorLink, httpLink.create({ uri })]);

    return {
        link,
        cache: new InMemoryCache(),
        useGETForQueries: true
    };
}

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory: provideApollo,
        deps: [HttpLink]
    }]
})
export class GraphQLModule {
}
