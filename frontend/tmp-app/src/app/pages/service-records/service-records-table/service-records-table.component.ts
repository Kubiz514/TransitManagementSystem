import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-service-records-table',
  templateUrl: './service-records-table.component.html',
  styleUrls: ['./service-records-table.component.css']
})
export class ServiceRecordsTableComponent implements OnInit, TableView {
  colDefs: ColDef<any>[] = [];
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
