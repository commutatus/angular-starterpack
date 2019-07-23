import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ActionButtonComponent} from './action-button/action-button.component';
import {ActionModalComponent} from './action-modal/action-modal.component';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {ErrorComponent} from './error-modal/error.component';


@NgModule({
  declarations: [
    ActionButtonComponent,
    ActionModalComponent,
    ConfirmationModalComponent,
    ErrorComponent
  ],
  // imports: [BrowserModule],
  imports: [
    CommonModule
  ],
  exports: [
    ActionButtonComponent,
    ActionModalComponent,
    ConfirmationModalComponent,
    ErrorComponent
  ]
})
export class SharedComponentsModule {
}
