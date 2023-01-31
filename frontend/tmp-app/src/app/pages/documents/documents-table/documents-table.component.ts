import { Component, OnInit } from '@angular/core';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent implements OnInit, TableView {
  request$ = this._webApi.get('/documents');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'DocumentType'
    },
    {
      field: 'ValidTo'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(private _webApi: WebApiService) { }

  ngOnInit(): void {
  }

}
