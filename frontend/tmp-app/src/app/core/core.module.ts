import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';



@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
