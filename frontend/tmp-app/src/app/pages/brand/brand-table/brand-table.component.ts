import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/brands');
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
