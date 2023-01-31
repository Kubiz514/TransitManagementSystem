import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesTableComponent } from './routes-table/routes-table.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
