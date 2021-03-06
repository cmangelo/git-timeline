import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { token } from '../git-token';

const uri = 'https://api.github.com/graphql';
export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({uri: uri});

  const auth = setContext((_, { headers }) => {
    return {headers: {
      Authorization: 'Bearer ' + token
  } };
  });
  return {
    link: auth.concat(http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
