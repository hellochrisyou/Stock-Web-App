import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink, from, concat } from 'apollo-link';
import { setContext } from 'apollo-link-context';

const uri = 'http://localhost:8080/graphql';

export function provideApollo(httpLink: HttpLink) {

    const basicHeader = new HttpHeaders()
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        // tslint:disable-next-line: max-line-length
        .append('Access-Control-Allow-Headers', 'client-security-token, X-Auth-Token, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization')
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/json')
        ;

    // if (localStorage.getItem(TOKEN) != null) {
    //     basicHeader.append('Authorization', localStorage.getItem(TOKEN));
    // } else {
    //     basicHeader.append('Authorization', null);
    // }
 
    const basic = setContext((op, ctx) => ({
        headers: basicHeader
    }));

    // const token = localStorage.getItem(TOKEN);
    // const auth = setContext((operation, ctx) => ({
    //     headers: ctx.headers.append('Authorization', `Bearer ${token}`)
    // }));

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

    // const link = ApolloLink.from([basic, auth, errorLink, httpLink.create({ uri })]);
    const link = ApolloLink.from([basic, errorLink, httpLink.create({ uri })]);

    return {
        link,
        cache: new InMemoryCache(),
        useGETForQueries: true,
        defaultOptions: {
            query: {
                errorPolicy: "all"
            }
        }
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