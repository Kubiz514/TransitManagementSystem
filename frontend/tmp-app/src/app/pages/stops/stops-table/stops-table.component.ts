import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { ImportableComponent } from '@core/table-view/importable/importable.component';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';
import { ActionsCellRendererComponent } from 'src/app/shared/actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'app-stops-table',
  templateUrl: './stops-table.component.html',
  styleUrls: ['./stops-table.component.css']
})
export class StopsTableComponent extends ImportableComponent implements OnInit, TableView {
  protected gridApi!: GridApi;

  colDefs: ColDef[] = [
    {
      field: 'Id',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Latitude',
      editable: true,
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Longitude',
      editable: true,
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Actions',
      cellRenderer: ActionsCellRendererComponent,
      cellRendererParams: {
        deleteFunc: (x: any) => {
          this.webApi.delete(`/stops/${x.Id}`, x.Id)
          .subscribe(() => this.refresh.next(true));
        }
      }
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/stops')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'Latitude',
      type: 'input',
      props: {
        label: 'Latitude',
        placeholder: '11.11',
        required: true,
      }
    },
    {
      key: 'Longitude',
      type: 'input',
      props: {
        label: 'Longitude',
        placeholder: '10.10',
        required: true,
      }
    }
  ];



  constructor(protected webApi: WebApiService, protected dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.webApi.createTableRow('/stops', this.form).pipe(
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
    this.webApi.post('/stops/import', this.importRequestBody.getValue())
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
