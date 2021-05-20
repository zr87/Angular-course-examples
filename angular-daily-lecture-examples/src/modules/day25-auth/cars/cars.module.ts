import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';



@NgModule({
    declarations: [
        CarsComponent
    ],
    exports: [
        CarsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CarsModule { }
