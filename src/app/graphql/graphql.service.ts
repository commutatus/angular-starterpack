import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import { concat, ApolloLink } from 'apollo-link';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {prod, staging} from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

   schema: any;
   environmentName: any;
   environment: any;
   appApiEndpoint: any;
   host: any;

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink,
    private http: HttpClient,
    private cookies: CookieService,
  ) {
    this.setConfigs();
   }

  async initializeApollo(): Promise<any> {

    this.environmentName = await this.getEnvironment().catch(e => {
      console.error('Error fetching environment');
    });

    this.environment = this.environmentName === 'staging' ? staging : prod;

    const http = this.httpLink.create({uri: `${this.environment.api}/graphql`});
    const fragmentMatcher = await this.buildFragmentMatcher().catch(e => {
      console.log('error getting fragment matcher: ', e);
    });

    const cache = this.buildCache(fragmentMatcher);

    return new Promise((resolve, reject) => {
      this.apollo.create({
        link: concat(this.authMiddleware(), http),
        cache,
      });
      resolve();
    });
  }

  authMiddleware() {
    return new ApolloLink((operation, forward) => {
      // Check for token
      const token: string = this.cookies.get('YOURTOKEN') || null;
      if (!token) {
        return forward(operation);
      }
      // add the authorization to the headers
      operation.setContext({
        headers: new HttpHeaders().set('Authorization', token)
      });

      return forward(operation);
    });
  }

  buildFragmentMatcher(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let fragmentMatcher;

      try {
        this.schema = await this.fetchSchema();
        fragmentMatcher = new IntrospectionFragmentMatcher({
          introspectionQueryResultData: this.schema
        });
        return resolve(fragmentMatcher);
      } catch (e) {
        return reject();
      }
    });
  }

  buildCache(fragmentMatcher?) {
    // This is to overcome apollo bug which throws error if no query is present to be read
    let cache;
    if (fragmentMatcher) {
      cache = new InMemoryCache({fragmentMatcher});
    } else {
      cache = new InMemoryCache();
    }
    cache.originalReadQuery = cache.readQuery;
    cache.readQuery = (...args) => {
      try {
        return cache.originalReadQuery(...args);
      } catch (err) {
        return null;
      }
    };
    return cache;
  }

  async fetchSchema() {

    const token = JSON.parse(this.cookies.get('YOURTOKEN') || null);

    let uri;
    if (token && token.access_token) {
      uri = `${this.environment.api}/graphql?access_token=${token.access_token}`;
    } else {
      uri = `${this.environment.api}/graphql`;
    }

    uri = `${this.environment.api}/graphql`;

    const apollo = new ApolloClient({
      cache: new InMemoryCache,
      link: this.httpLink.create({uri})
    });


    const query = gql`
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `;

    return new Promise((resolve, reject) => {
      apollo.query({
          query,
          variables: {}
        })
        .then((res: any) => {
          // here we're filtering out any type information unrelated to unions or interfaces
          const filteredData = res.data.__schema.types.filter(
            type => type.possibleTypes !== null
          );
          const result = JSON.parse(JSON.stringify(res.data));
          result.__schema.types = filteredData;
          resolve(result);
        }, err => {
          reject(err);
        });
    });

  }

  getEnvironment() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.appApiEndpoint}/getEnvironment`)
        .subscribe((data: any) => {
          resolve(data.environment);
        }, err => {
          reject(err);
        });
    });
  }

  setConfigs() {
    this.host = `${document.location.protocol}//${document.location.host}`;
    if (document.location.hostname === 'localhost') {
      this.appApiEndpoint = `${document.location.protocol}//${document.location.hostname}:4000`;
    } else {
      this.appApiEndpoint = `${document.location.protocol}//${document.location.host}`;
    }
  }

}
