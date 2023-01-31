import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css']
})
export class RoutesTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/routes');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Name'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }
  


  ngOnInit(): void {
  }

}
