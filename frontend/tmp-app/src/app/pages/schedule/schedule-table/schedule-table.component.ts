import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { formatDate } from '@core/utils';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit, TableView {
  protected gridApi!: GridApi;

  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/schedules')));
  form = new FormGroup({});
  colDefs: ColDef[] = [
    {
      field: 'Departure',
      sortable: true,
      valueFormatter: (data: any) => formatDate(data.value, 'DD-MM-YYYY hh:mm')
    },
    {
      field: 'temporary',
      sortable: true,
      filter: 'agTextColumnFilter'
    }

  ];

  fields: FormlyFieldConfig[] = [
    {
      key: 'Departure',
      type: 'datepicker',
      props: {
        label: 'Departure',
        placeholder: 'DD-MM-YYYY',
        required: true,
      }
    },
    {
      key: 'Temporary',
      type: 'checkbox',
      props: {
        label: 'Temporary',
      }
    },
  ];
  domLayout: DomLayoutType = 'autoHeight';
  

  constructor(protected webApi: WebApiService, protected dialog: MatDialog) { }
  

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.webApi.createTableRow('/schedules', this.form).pipe(
      finalize(() => {
        this.refresh.next(true);
        this.form.reset();
      })
    ).subscribe();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  
}
