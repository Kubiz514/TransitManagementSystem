import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit, TableView {
  colDefs: ColDef<any>[] = [];

  constructor() { }
  

  ngOnInit(): void {
  }

}
