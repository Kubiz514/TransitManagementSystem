import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';

@Component({
  selector: 'app-service-records-table',
  templateUrl: './service-records-table.component.html',
  styleUrls: ['./service-records-table.component.css']
})
export class ServiceRecordsTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/service-records');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Description'
    },
    {
      field: 'Details'
    },
    {
      field: 'DateTime'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }
  

  ngOnInit(): void {
  }

}
