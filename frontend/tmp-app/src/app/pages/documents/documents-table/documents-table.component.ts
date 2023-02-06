import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from '@core/spinner/spinner.service';
import { TableView } from '@core/table-view';
import { ImportableComponent } from '@core/table-view/importable/importable.component';
import { formatDate } from '@core/utils';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, DomLayoutType, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, startWith, switchMap } from 'rxjs';
import { ActionsCellRendererComponent } from 'src/app/shared/actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent extends ImportableComponent implements OnInit, TableView {
  @ViewChild(AgGridAngular) grid!: AgGridAngular;
  protected gridApi!: GridApi;

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
    },
    {
      field: 'Actions',
      cellRenderer: ActionsCellRendererComponent,
      cellRendererParams: {
        deleteFunc: (x: any) => {
          this.webApi.delete(`/documents/${x.Id}`, x.Id)
          .subscribe(() => this.refresh.next(true));
        }
      }
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


  constructor(protected webApi: WebApiService, protected dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  import(): void {
    this.webApi.post('/documents/import', this.importRequestBody.getValue())
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
