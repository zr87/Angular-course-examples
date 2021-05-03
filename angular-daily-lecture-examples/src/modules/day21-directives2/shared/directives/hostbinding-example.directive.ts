import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHostbindingExample]'
})
export class HostbindingExampleDirective {

  @HostBinding('style.border') border: string | undefined;
  @HostBinding('style.color') color: string | undefined;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'lightgreen';

    this.border = '1px solid green';
    this.color = 'green';
  }

}
