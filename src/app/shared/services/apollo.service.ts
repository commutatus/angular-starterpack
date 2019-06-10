import { Injectable } from '@angular/core';
import {HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {
   uri = ''; // <-- add the URL of the GraphQL server here

  constructor() { }

  initializeApollo() {}

  // createApollo(httpLink: HttpLink) {
  //   return {
  //     link: httpLink.create({uri}),
  //     cache: new InMemoryCache(),
  //   };
  // }
}
