import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent implements OnInit, TableView {

  constructor() { }

  colDefs: ColDef<any>[] = [];

  ngOnInit(): void {
  }

}
