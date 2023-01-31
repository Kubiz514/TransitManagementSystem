import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceRecordsTableComponent } from './service-records-table/service-records-table.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceRecordsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRecordsRoutingModule { }
