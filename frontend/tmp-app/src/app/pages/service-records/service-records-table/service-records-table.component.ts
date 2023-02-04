import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-service-records-table',
  templateUrl: './service-records-table.component.html',
  styleUrls: ['./service-records-table.component.css']
})
export class ServiceRecordsTableComponent implements OnInit, TableView {
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Description',
      editable: true
    },
    {
      field: 'Details',
      editable: true
    },
    {
      field: 'DateTime'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/service-records')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'Description',
      type: 'input',
      props: {
        label: 'Description',
        placeholder: 'description',
        required: true,
      }
    },
    {
      key: 'Details',
      type: 'input',
      props: {
        label: 'Details',
        placeholder: 'details',
        required: true,
      }
    },
    {
      key: 'DateTime',
      type: 'datepicker',
      props: {
        label: 'DateTime',
        placeholder: 'DD-MM-YYYY',
        required: true,
      }
    }
  ];

  onSubmit(): void {
    this.webApi.createTableRow('/service-records', this.form).pipe(
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
