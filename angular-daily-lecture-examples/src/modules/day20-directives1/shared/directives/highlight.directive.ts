import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() appHighlight: string | undefined;
  @Input() fontSize: string | undefined;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    console.log("this.el", this.el.nativeElement);

    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
    if (this.fontSize) {
      this.el.nativeElement.style.fontSize = this.fontSize;
    }
  }

}
