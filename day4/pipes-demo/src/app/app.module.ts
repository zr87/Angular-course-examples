import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbsolutePipe } from './absolute.pipe';
import { HighlightPipe } from './highlight.pipe';
import {EmojifyModule} from "angular-emojify";

@NgModule({
  declarations: [
    AppComponent,
    AbsolutePipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    EmojifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
