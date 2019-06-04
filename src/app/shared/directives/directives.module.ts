import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LimitToDirective} from './limit-to.directive';
import {SearchInputDirective} from './search-input.directive';
import { InfiniteScrollDirective } from './infinite-scroll.directive';


@NgModule({
  declarations: [
    LimitToDirective,
    SearchInputDirective,
    InfiniteScrollDirective
  ],
  exports: [
    LimitToDirective,
    SearchInputDirective,
    InfiniteScrollDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule {
}
