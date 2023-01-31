import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/drivers');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'FirstName'
    },
    {
      field: 'LastName'
    },
    {
      field: 'ContactInfo'
    },
    {
      field: 'HiredDate'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }
  

  ngOnInit(): void {
  }

}
