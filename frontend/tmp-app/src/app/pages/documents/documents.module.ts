import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    DocumentsTableComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class DocumentsModule { }
