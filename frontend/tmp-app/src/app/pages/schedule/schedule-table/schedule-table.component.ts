import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { ImportableComponent } from '@core/table-view/importable/importable.component';
import { formatDate } from '@core/utils';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';
import { ActionsCellRendererComponent } from 'src/app/shared/actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent extends ImportableComponent implements OnInit, TableView {
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
      field: 'Temporary',
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      field: 'Actions',
      cellRenderer: ActionsCellRendererComponent,
      cellRendererParams: {
        deleteFunc: (x: any) => {
          this.webApi.delete(`/schedules/${x.Id}`, x.Id)
          .subscribe(() => this.refresh.next(true));
        }
      }
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


  constructor(protected webApi: WebApiService, protected dialog: MatDialog) {
    super();
   }


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

  import(): void {
    this.webApi.post('/schedules/import', this.importRequestBody.getValue())
    .pipe(
      finalize(() => {
        this.importRequestBody.next(undefined);
        this.fileInput.reset();
        this.refresh.next(true);
      })
    )
    .subscribe();
  }

}
