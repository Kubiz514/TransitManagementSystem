import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './shared/layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
