import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string | undefined;
  id: string | undefined;
  data: any | undefined;

  params: Params | undefined;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpClient
  ) {
  }

  ngOnInit(): void {
    /* Switchmap example -of falttening code - avoiding triangle of doom */

    this.route.params.pipe(
      tap(params => {
        console.log("tap data:", params);
        this.id = params.id;
      }),
      switchMap(params => this.httpService.get("https://jsonplaceholder.typicode.com/posts/" + params.id))
    ).subscribe(data => {
      console.log("subscribe params", data); // pls delete console logs after debugging!
      this.data = data;
    });
  }
}
