import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopsTableComponent } from './stops-table/stops-table.component';

const routes: Routes = [
  {
    path: '',
    component: StopsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StopsRoutingModule { }
