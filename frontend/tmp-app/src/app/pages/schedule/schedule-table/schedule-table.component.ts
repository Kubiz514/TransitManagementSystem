import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/schedules');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Departure'
    },
    {
      field: 'temporary'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }
  

  ngOnInit(): void {
  }

}
