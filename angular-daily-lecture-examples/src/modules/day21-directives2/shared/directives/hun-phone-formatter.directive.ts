import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHunPhoneFormatter]'
})
export class HunPhoneFormatterDirective implements AfterViewInit {

  static readonly PHONE_PREFIX = '+36-';

  constructor(private el: ElementRef) {
    console.log("el", this.el);
  }

  // 0. a) input inicializalasa "+36-" résszel
  //  ngAfterViewInit-be
  // nem lehet törölni, input length == 4, akkor tilsa le a törlést
  // backspace
  ngAfterViewInit(): void {
    console.log("this.el.nativeElement.", this.el.nativeElement);
    this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX;
  }

  // 1. hostlistenerrel keyup event-re figyelni
  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent): void {
    const key = event.key;
    const inputValue = (event.target as HTMLInputElement).value;

    console.log("event", key, inputValue, event);

    if (inputValue.length <= HunPhoneFormatterDirective.PHONE_PREFIX.length && key === 'Backspace') {
      this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX;
      return;
    }

    const value = inputValue.slice(0, 3);
    // console.log("value", value, inputValue.slice(0, 4));

    if (inputValue.slice(0, HunPhoneFormatterDirective.PHONE_PREFIX.length) !== HunPhoneFormatterDirective.PHONE_PREFIX) {
      this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX;
    }

    // +36- = 4
    // +36-20-343
    if (inputValue.length === 7) {
      console.log(" inputValue.slice(4, 6) ",  inputValue.slice(4, 6));
      this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX + inputValue.slice(4, 6) + '-' + inputValue.slice(6, 7);
    }

  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const key = event.key;
    const inputValue = (event.target as HTMLInputElement).value;

    // console.log("onKeydown", key, inputValue, event);

    if (inputValue.length === HunPhoneFormatterDirective.PHONE_PREFIX.length && key === 'Backspace') {
      event.preventDefault();
      this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX;
      return;
    }

    if (inputValue.length === HunPhoneFormatterDirective.PHONE_PREFIX.length && key === 'Delete') {
      event.preventDefault();
      this.el.nativeElement.value = HunPhoneFormatterDirective.PHONE_PREFIX;
      return;
    }

    // megvizsgalni, hogy a leütött karakter az szám-e, ha igen akkor engedjük tovabb, ellenben preventDefault
    const regexp: RegExp = new RegExp('[0-9]');
    if (key !== 'Backspace' && !regexp.test(key)) {
      event.preventDefault();
      return;
    }
  }


}


// 2. $event.target.value

