import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { JoinPipe } from './join.pipe';

@NgModule({
  declarations: [SafeHtmlPipe, JoinPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
