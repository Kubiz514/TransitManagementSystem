import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { WebApiService } from './core';
import { RouteOption } from './shared/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: RouteOption[] = [
    {
      header: 'Brands',
      url: '/brands'
    },
    {
      header: 'Bus',
      url: '/buses'
    },
    {
      header: 'Documents',
      url: '/documents'
    },
    {
      header: 'Drivers',
      url: '/drivers'
    },
    {
      header: 'Routes',
      url: '/routes'
    },
    {
      header: 'Schedule',
      url: '/schedule'
    },
    {
      header: 'Service records',
      url: '/service-records'
    },
    {
      header: 'Stops',
      url: '/stops'
    }
  ]
}
