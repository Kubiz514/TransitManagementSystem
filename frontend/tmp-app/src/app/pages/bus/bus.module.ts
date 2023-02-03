import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusTableComponent } from './bus-table/bus-table.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    BusTableComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    SharedModule
  ]
})
export class BusModule { }
