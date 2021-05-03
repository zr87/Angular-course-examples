import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  numberOfClicks = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    console.log('Host Element clicked', this.el.nativeElement);
  }
}
