import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandTableComponent } from './brand-table/brand-table.component';

const routes: Routes = [
  {
    path: '',
    component: BrandTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
