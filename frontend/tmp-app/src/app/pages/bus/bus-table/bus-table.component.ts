import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent implements OnInit, TableView {

  colDefs: ColDef<any>[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
