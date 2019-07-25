import { Directive, ElementRef, AfterViewInit, AfterContentInit, AfterViewChecked, Input } from '@angular/core';
import { GraphqlService } from 'src/app/graphql/graphql.service';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements AfterViewInit, AfterViewChecked {

  @Input() type: string;

  ele: HTMLImageElement;

  constructor(
    private elr: ElementRef,
    private graphqlService: GraphqlService,
  ) {
    this.ele = this.elr.nativeElement;
   }

   ngAfterViewChecked(): void {
     if (this.ele.src && this.ele.src !== this.graphqlService.host + '/null') {
      return;
     }
     this.setDefaultImage();
   }

   ngAfterViewInit(): void {
    if (this.ele.src && this.ele.src !== this.graphqlService.host + '/null') {
      return;
    }
    this.setDefaultImage();
   }

   setDefaultImage() {
    switch (this.type) {
      case 'person':
        this.ele.src = './assets/images/person-default.svg';
        break;
      case 'group':
        this.ele.src = './assets/images/group-default.svg';
        break;
      case 'organisation':
        this.ele.src = './assets/images/organisation-default.svg';
        break;
    }
   }


}
