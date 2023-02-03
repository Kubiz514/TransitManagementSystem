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
  request$ = this.webApi.get('/drivers');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'FirstName',
      editable: true
    },
    {
      field: 'LastName',
      editable: true
    },
    {
      field: 'ContactInfo',
      editable: true
    },
    {
      field: 'HiredDate'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(protected webApi: WebApiService) { }
  

  ngOnInit(): void {
  }

}
