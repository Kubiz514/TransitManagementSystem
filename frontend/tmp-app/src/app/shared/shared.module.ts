import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AgGridModule } from 'ag-grid-angular';
import { CreateButtonComponent } from './create-button/create-button.component';

const MODULES = [
  CommonModule,
  AgGridModule,
  ReactiveFormsModule,
  FormlyMaterialModule,
  FormlyModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule
];

const COMPONENTS = [CreateButtonComponent];

@NgModule({
  declarations: [
  ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
