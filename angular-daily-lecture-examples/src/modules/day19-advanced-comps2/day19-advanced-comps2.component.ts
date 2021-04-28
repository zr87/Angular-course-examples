import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-day19-advanced-comps2',
  templateUrl: './day19-advanced-comps2.component.html',
  styleUrls: ['./day19-advanced-comps2.component.scss']
})
export class Day19AdvancedComps2Component implements AfterViewInit {

  @ViewChild('myParag') element: ElementRef | undefined;

  title: string | undefined;

  ngAfterViewInit(): void {

    this.title = "<b>MY Title<b>";

    console.log("this.elemt", this.element);
    // @ts-ignore
    this.element?.nativeElement.innerHTML = "Hello world!";
    // @ts-ignore
    this.element?.nativeElement.style.backgroundColor = 'red';
  }


}
