import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ActionButtonComponent} from './action-button/action-button.component';
import {ActionModalComponent} from './action-modal/action-modal.component';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {ErrorComponent} from './error-modal/error.component';
import { ConfirmationModalModule } from './confirmation-modal.1/confirmation-modal.module';
import { ToastComponent } from './toast/toast.component';
import { LinearLoaderModule } from './linear-loader/linear-loader.module';


@NgModule({
  declarations: [
    ActionButtonComponent,
    ActionModalComponent,
    ConfirmationModalComponent,
    ErrorComponent,
    ToastComponent,
  ],
  // imports: [BrowserModule],
  imports: [
    CommonModule,
    ConfirmationModalModule,
    LinearLoaderModule,
  ],
  exports: [
    ActionButtonComponent,
    ActionModalComponent,
    ConfirmationModalComponent,
    ErrorComponent,
    ToastComponent,
    LinearLoaderModule
  ]
})
export class SharedComponentsModule {
}
