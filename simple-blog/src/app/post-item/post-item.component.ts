import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-item',
  template: `
    <mat-card [id]="post.id" *ngIf="post">
      <img [src]="imgLink" alt="">
      <mat-card-title> {{ post.title }} </mat-card-title>
      <mat-card-content>
        <p> {{ post.body}} </p>
      </mat-card-content>
      <button mat-button >read more</button>
    </mat-card>
  `,
  styles: [
      ':host { display: block }',
      'img {width: 100%;}'
  ]
})
export class PostItemComponent implements OnInit {

  @Input() post: Post | undefined;
  imgLink:string = 'https://picsum.photos/1000/500';

  ngOnInit(): void {}

}
