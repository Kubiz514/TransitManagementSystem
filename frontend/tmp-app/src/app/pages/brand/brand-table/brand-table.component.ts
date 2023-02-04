import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { ImportableComponent } from '@core/table-view/importable/importable.component';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent extends ImportableComponent implements OnInit, TableView {
  protected gridApi!: GridApi;

  colDefs: ColDef[] = [
    {
      field: 'Id',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'Name',
      editable: true,
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
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/brands')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'Name',
      type: 'input',
      props: {
        label: 'Brand name',
        placeholder: 'name',
        required: true,
      }
    },
    {
      key: 'Description',
      type: 'input',
      props: {
        label: 'Description',
        placeholder: 'description',
        required: true,
      }
    }
  ];

  onSubmit(): void {
    this.webApi.createTableRow('/brands', this.form).pipe(
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
    this.webApi.post('/brands/import', this.importRequestBody.getValue())
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
