import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { WebApiService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  buses$ = this._webApi.get('/buses');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Name'
    },
    {
      field: 'Description'
    }
  ];

  constructor(private _webApi: WebApiService) {
  }
}
