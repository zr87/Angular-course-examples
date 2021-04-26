import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day6ServiceComponent } from './day6-service.component';
import {RandomService} from "./random.service";




@NgModule({
  declarations: [
    Day6ServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Day6ServiceComponent
  ],
  providers: [RandomService],
})
export class Day6ServiceModule { }
