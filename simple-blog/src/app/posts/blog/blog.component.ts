import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-blog',
  template: `      
    <div class="grid-continer">
       <mat-card *ngFor="let post of data" [id]="post.id">
            <img [src]="imgLink" alt="">
            <mat-card-title> {{ post.title }} </mat-card-title>
            <mat-card-content>
              <p> {{ post.body}} </p>s
            </mat-card-content>
            <button mat-button >read more</button>
       </mat-card>
    </div>
  `,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  imgLink:string = 'https://picsum.photos/600/300';

  @Input()
  data: Post[] = [];

  ngOnInit(): void {
    console.log("posts arra", this.data);
  }

}
