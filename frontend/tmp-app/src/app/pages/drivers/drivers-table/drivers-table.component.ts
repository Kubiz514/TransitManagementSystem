import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableView } from '@core/table-view';
import { WebApiService } from '@core/web-api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, DomLayoutType } from 'ag-grid-community';
import { BehaviorSubject, finalize, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit, TableView {
  colDefs: ColDef[] = [
    {
      field: 'Id'
    },
    {
      field: 'FirstName',
      editable: true
    },
    {
      field: 'LastName',
      editable: true
    },
    {
      field: 'ContactInfo',
      editable: true
    },
    {
      field: 'HiredDate'
    }
  ];
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 10;
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.webApi.get('/drivers')));
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'FirstName',
      type: 'input',
      props: {
        label: 'First Name',
        placeholder: 'first name',
        required: true,
      }
    },
    {
      key: 'LastName',
      type: 'input',
      props: {
        label: 'Last Name',
        placeholder: 'last name',
        required: true,
      }
    },
    {
      key: 'ContactInfo',
      type: 'input',
      props: {
        label: 'Contact Info',
        placeholder: 'contact info',
        required: true,
      }
    },
    {
      key: 'HiredDate',
      type: 'datepicker',
      props: {
        label: 'HiredDate',
        placeholder: 'DD-MM-YYYY',
        required: true,
      }
    }
  ];

  onSubmit(): void {
    this.webApi.createTableRow('/drivers', this.form).pipe(
      finalize(() => {
        this.refresh.next(true);
        this.form.reset();
      })
    ).subscribe();
  }

  constructor(protected webApi: WebApiService, protected dialog: MatDialog) { }


  ngOnInit(): void {
  }

}
