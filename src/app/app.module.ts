import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './shared/components/action-button/action-button.component';
import { ActionModalComponent } from './shared/components/action-modal/action-modal.component';
import { ErrorModalComponent } from './shared/components/error-modal/error-modal.component';
import { ConfirmationModalComponent } from './shared/components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    ActionModalComponent,
    ErrorModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
