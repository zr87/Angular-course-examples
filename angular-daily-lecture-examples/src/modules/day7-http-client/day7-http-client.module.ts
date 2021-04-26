import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day7HttpClientComponent } from './day7-http-client/day7-http-client.component';
import {UserModule} from "./user/user.module";



@NgModule({
  declarations: [
    Day7HttpClientComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    Day7HttpClientComponent
  ]
})
export class Day7HttpClientModule { }
