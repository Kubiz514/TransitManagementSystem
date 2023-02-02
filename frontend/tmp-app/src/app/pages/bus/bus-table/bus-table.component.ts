import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent implements OnInit, TableView {
  request$ = this.webApi.get('/buses');
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'Name',
      editable: true
    },
    {
      field: 'Description',
      editable: true
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  constructor(protected webApi: WebApiService) { }
  
  ngOnInit(): void {
  }

}
