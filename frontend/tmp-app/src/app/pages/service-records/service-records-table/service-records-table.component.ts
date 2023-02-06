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
  selector: 'app-service-records-table',
  templateUrl: './service-records-table.component.html',
  styleUrls: ['./service-records-table.component.css']
})
export class ServiceRecordsTableComponent extends ImportableComponent implements OnInit, TableView {
  protected gridApi!: GridApi;

  colDefs: ColDef[] = [
    {
      field: 'Id',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Description',
      editable: true,
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      field: 'Details',
      editable: true,
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      field: 'DateTime',
      sortable: true,
      valueFormatter: (data: any) => formatDate(data.value, 'DD-MM-YYYY hh:mm')
    },
    {
      field: 'Actions',
      cellRenderer: ActionsCellRendererComponent,
      cellRendererParams: {
        deleteFunc: (x: any) => {
          this.webApi.delete(`/service-records/${x.Id}`, x.Id)
          .subscribe(() => this.refresh.next(true));
        }
      }
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
        label: 'Date time',
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


  constructor(protected webApi: WebApiService, protected dialog: MatDialog) {
    super();
   }


  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  import(): void {
    this.webApi.post('/service-records/import', this.importRequestBody.getValue())
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
