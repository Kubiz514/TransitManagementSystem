import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopsRoutingModule } from './stops-routing.module';
import { StopsTableComponent } from './stops-table/stops-table.component';


@NgModule({
  declarations: [
    StopsTableComponent
  ],
  imports: [
    CommonModule,
    StopsRoutingModule
  ]
})
export class StopsModule { }
