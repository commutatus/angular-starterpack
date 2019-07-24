import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql/graphql.module';
import {SharedComponentsModule} from './shared/components/shared-components.module';
import {SharedDirectivesModule} from './shared/directives/shared-directives.module';
import { CookieService } from 'ngx-cookie-service';
import { NavbarModule } from './modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    GraphQLModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
