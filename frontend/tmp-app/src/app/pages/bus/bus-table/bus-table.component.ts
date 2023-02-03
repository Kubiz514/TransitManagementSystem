import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent implements OnInit, TableView {
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/buses')));
  colDefs: ColDef[] = [
    {
      field: 'Name'
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

  constructor(protected webApi: WebApiService) { }
  
  ngOnInit(): void {
  }


  onSubmit(): void {
    this.webApi.createTableRow('/buses', this.form);
    this.refresh.next(true);
    this.form.reset();
  }

}
