import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'brands',
    loadChildren: () => import('./pages/brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'buses',
    loadChildren: () => import('./pages/bus/bus.module').then(m => m.BusModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./pages/routes/routes.module').then(m => m.RoutesModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'service-records',
    loadChildren: () => import('./pages/service-records/service-records.module').then(m => m.ServiceRecordsModule)
  },
  {
    path: 'stops',
    loadChildren: () => import('./pages/stops/stops.module').then(m => m.StopsModule)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('./pages/bus/bus.module').then(m => m.BusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
