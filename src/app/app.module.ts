import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CookieService} from 'ngx-cookie-service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql/graphql.module';
import {NavbarModule} from './modules/navbar/navbar.module';
import {ComponentsModule} from './shared/components/components.module';
import {DirectivesModule} from './shared/directives/directives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    ComponentsModule,
    GraphQLModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
