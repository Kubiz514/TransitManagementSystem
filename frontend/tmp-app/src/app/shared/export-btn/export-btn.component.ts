import { Component, Input, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-export-btn',
  templateUrl: './export-btn.component.html',
  styleUrls: ['./export-btn.component.css']
})
export class ExportBtnComponent{
  @Input() gridApi!: GridApi;
  constructor() { }
}
