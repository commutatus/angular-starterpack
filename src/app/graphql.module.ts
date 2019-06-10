import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ApolloModule} from 'apollo-angular';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloService} from './shared/services/apollo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApollo,
      deps: [ApolloService],
      multi: true
    },
    ApolloService
  ]
})
export class GraphQLModule {
}

export function initializeApollo(appApolloService: ApolloService) {
  return () => appApolloService.initializeApollo();
}
