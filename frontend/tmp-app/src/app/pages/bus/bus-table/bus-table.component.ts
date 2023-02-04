import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { ImportableComponent } from '@core/table-view/importable/importable.component';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, Observable, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent extends ImportableComponent implements OnInit, TableView {
  protected gridApi!: GridApi;
  colDefs: ColDef[] = [
    {
      field: 'Id',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Name',
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      field: 'Description',
      editable: true,
      sortable: true,
      filter: 'agTextColumnFilter'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/buses')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'Name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'Description',
      type: 'input',
      props: {
        label: 'Description',
        placeholder: 'Enter description',
        required: true,
      }
    }
  ];

  constructor(
    protected webApi: WebApiService,
    protected dialog: MatDialog
    ) { 
      super();
    }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.webApi.createTableRow('/buses', this.form).pipe(
      finalize(() => {
        this.refresh.next(true);
        this.form.reset();
      })
    ).subscribe();
  }

  import(): void {
    this.webApi.post('/buses/import', this.importRequestBody.getValue())
    .pipe(
      finalize(() => {
        this.importRequestBody.next(undefined);
        this.fileInput.reset();
        this.refresh.next(true);
      })
    )
    .subscribe();
  }


  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
