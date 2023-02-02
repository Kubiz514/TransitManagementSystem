import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';

@Component({
  selector: 'app-stops-table',
  templateUrl: './stops-table.component.html',
  styleUrls: ['./stops-table.component.css']
})
export class StopsTableComponent implements OnInit, TableView {
  request$ = this.webApi.get('/stops');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Latitude'
    },
    {
      field: 'Longitude'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(protected webApi: WebApiService) { }

  ngOnInit(): void {
  }

}
