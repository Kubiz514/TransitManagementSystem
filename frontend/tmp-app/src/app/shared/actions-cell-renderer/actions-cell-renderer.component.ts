import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-cell-renderer',
  templateUrl: './actions-cell-renderer.component.html',
  styleUrls: ['./actions-cell-renderer.component.css']
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {

  public cellValue!: string;
  public item!: any;
  public deleteFunc!: (x: any) => void


  constructor(protected dialog: MatDialog) {

  }
   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
       this.cellValue = this.getValueToDisplay(params);
       this.item = params.data;
       const paramsCp: any = params;
      this.deleteFunc = paramsCp.deleteFunc;
   }

   // gets called whenever the cell refreshes
   refresh(params: ICellRendererParams): boolean {
       // set value into cell again
       this.cellValue = this.getValueToDisplay(params);
       return true;
   }

   buttonClicked() {
       alert(`${this.cellValue} medals won!`)
   }

   getValueToDisplay(params: ICellRendererParams) {
       return params.valueFormatted ? params.valueFormatted : params.value;
   }

}
