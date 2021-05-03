import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  possibleColors: string[] = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey', 'red', 'green', 'purple'
  ];

  @HostBinding('style.border') border: string | undefined;
  @HostBinding('style.outline') outline: string | undefined;
  @HostBinding('style.color') color: string | undefined;

  @HostListener('keyup')
  onKeyupChangeColors(): void {
    console.log("keyup" );

    const colorPickIndex = Math.floor(
      Math.random() * this.possibleColors.length
    );
    console.log("colorPickIndex", colorPickIndex, this.possibleColors.length);
    this.color = this.possibleColors[colorPickIndex];
    this.border = `1px solid ${this.possibleColors[colorPickIndex]}`;
    this.outline = `1px solid ${this.possibleColors[colorPickIndex]}`;
  }

}
