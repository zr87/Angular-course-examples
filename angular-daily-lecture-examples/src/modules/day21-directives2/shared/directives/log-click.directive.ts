import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  numberOfClicks = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event.target'])
  onClick(event: any): void {
    console.log('Host Element clicked', event);
  }

/*  @HostListener('mouseover')
  onMouseOver(): void {
    console.log('Host Element hover', this.el.nativeElement);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    console.log('Host Element mouse left', this.el.nativeElement);
  }

  @HostListener('focus')
  onFocus(): void {
    console.log('Host Element focus', this.el.nativeElement);
  }

  @HostListener('keyup')
  onKeyup(): void {
    console.log('Host Element onKeyup', this.el.nativeElement);
  }*/
}
