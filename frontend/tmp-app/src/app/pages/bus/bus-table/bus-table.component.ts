import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/buses');
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
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }
  
  ngOnInit(): void {
  }

}
