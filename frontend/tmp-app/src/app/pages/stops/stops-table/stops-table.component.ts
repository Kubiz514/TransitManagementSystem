import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-stops-table',
  templateUrl: './stops-table.component.html',
  styleUrls: ['./stops-table.component.css']
})
export class StopsTableComponent implements OnInit, TableView {
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Latitude'
    },
    {
      field: 'Longitude'
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

  onSubmit(): void {
    this.webApi.createTableRow('/stops', this.form);
    this.refresh.next(true);
    this.form.reset();
  }

  constructor(protected webApi: WebApiService) { }

  ngOnInit(): void {
  }

}
