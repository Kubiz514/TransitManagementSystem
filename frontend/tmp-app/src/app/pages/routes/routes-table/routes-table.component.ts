import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css']
})
export class RoutesTableComponent implements OnInit, TableView {
  colDefs: ColDef<any>[] = [];
  constructor() { }


  ngOnInit(): void {
  }

}
