import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesTableComponent } from './routes-table/routes-table.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    RoutesTableComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
