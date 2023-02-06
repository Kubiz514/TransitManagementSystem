import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-datepicker-field-type',
  templateUrl: './datepicker-field-type.component.html',
  styleUrls: ['./datepicker-field-type.component.css']
})
export class DatepickerFieldTypeComponent extends FieldType<FieldTypeConfig> {

  constructor() { 
    super();
  }

}
