import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IncreaseComponent } from './increase/increase.component';
import { DecreaseComponent } from './decrease/decrease.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncreaseComponent,
    DecreaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
