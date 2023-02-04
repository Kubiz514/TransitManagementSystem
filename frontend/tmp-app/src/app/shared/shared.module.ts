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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerFieldTypeComponent } from './datepicker-field-type/datepicker-field-type.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxErrorsModule } from '@ngspot/ngx-errors';

const MODULES = [
  CommonModule,
  AgGridModule,
  ReactiveFormsModule,
  FormlyMaterialModule,
  FormlyModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  NgxErrorsModule
];

const COMPONENTS = [CreateButtonComponent];

@NgModule({
  declarations: [
  ...COMPONENTS,
  DatepickerFieldTypeComponent
  ],
  imports: [
    ...MODULES,
    FormlyModule.forRoot({
      types: [
        { name: 'datepicker', component: DatepickerFieldTypeComponent },
      ],
    }),
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
