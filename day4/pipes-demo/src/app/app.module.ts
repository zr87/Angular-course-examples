import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbsolutePipe } from './absolute.pipe';
import { HighlightPipe } from './highlight.pipe';
import {EmojifyModule} from "angular-emojify";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AbsolutePipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    EmojifyModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
