import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    DocumentsTableComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    AgGridModule
  ]
})
export class DocumentsModule { }
