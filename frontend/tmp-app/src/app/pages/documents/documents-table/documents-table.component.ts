import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { formatDate } from '@core/utils';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, finalize, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent implements OnInit, TableView {
  colDefs: ColDef[] = [
    {
      field: 'Id',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'DocumentType',
      editable: true,
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      field: 'ValidTo',
      sortable: true,
      valueFormatter: (data: any) => formatDate(data.value, 'DD-MM-YYYY hh:mm')
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/documents')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'DocumentType',
      type: 'input',
      props: {
        label: 'Document type',
        placeholder: 'type',
        required: true,
      }
    },
    {
      key: 'ValidTo',
      type: 'datepicker',
      props: {
        label: 'Valid to',
        placeholder: 'DD-MM-YYYY',
        required: true,
      }
    }
  ];

  onSubmit(): void {
    this.webApi.createTableRow('/documents', this.form).pipe(
      finalize(() => {
        this.refresh.next(true);
        this.form.reset();
      })
    ).subscribe();
  }


  constructor(protected webApi: WebApiService, protected dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
