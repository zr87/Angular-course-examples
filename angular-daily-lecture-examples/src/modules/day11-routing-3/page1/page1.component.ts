import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string | undefined;
  id: string | undefined;

  params: Params | undefined;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
/*    this.route.params.subscribe(params => {
      console.log("params", params);
      this.id = params.id;
      this.name = params.name;
      this.params = params;
    });*/
    // querz params
   /* this.route.queryParams.subscribe(params => {
      console.log("params", params);
      this.id = params.id;
      this.name = params.name;
      this.params = params;
    });*/

    this.route.fragment.subscribe(str => {
      console.log("fragment", str);
    });
  }

}
