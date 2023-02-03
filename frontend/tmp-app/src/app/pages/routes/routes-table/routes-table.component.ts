import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css']
})
export class RoutesTableComponent implements OnInit, TableView {
  colDefs: ColDef[] = [
    {
      field: 'Name',
      editable: true
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/routes')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'Name',
      type: 'input',
      props: {
        label: 'Route Name',
        placeholder: 'name',
        required: true,
      }
    }
  ];

  onSubmit(): void {
    this.webApi.createTableRow('/routes', this.form);
    this.refresh.next(true);
    this.form.reset();
  }

  constructor(protected webApi: WebApiService) { }
  


  ngOnInit(): void {
  }

}
