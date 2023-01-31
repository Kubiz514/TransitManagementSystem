import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusTableComponent } from './bus-table/bus-table.component';

const routes: Routes = [
  {
    path: '',
    component: BusTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
