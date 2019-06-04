import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LimitToDirective} from './limit-to.directive';
import {SearchInputDirective} from './search-input.directive';

@NgModule({
  declarations: [
    LimitToDirective,
    SearchInputDirective
  ],
  exports: [
    LimitToDirective,
    SearchInputDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule {
}
