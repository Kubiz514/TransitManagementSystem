import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-exportable',
  template: ''
})
export class ImportableComponent{
  protected importRequestBody = new BehaviorSubject<any>(undefined);
  fileInput: FormControl = new FormControl();

  constructor() { }

  fileInputChanged(event: any){
    if(!event.target.files[0])
    {
      this.importRequestBody.next(undefined);
      return;
    }

    const file: Blob = event.target.files[0];
    const reader = new FileReader();
    const jsonData: any[] =[];
    reader.onload = () => {
      let csvContent: any = reader.result?.toString();
      const rows = csvContent.split('\n');
      const headers = rows[0].split(',')
      .map((x: string) => x.replace(/\s|\\|\"/g,''));

      const dataRows = rows.slice(1).forEach((x: any) => {
        const data = x.replace(/\s|\\|\"/g,'').split(',');
        const resultObject: any = {};

        headers.forEach((headerName: string) => {
          const headerIdx = headers.indexOf(headerName);
          resultObject[headerName] = data[headerIdx];
        });

        jsonData.push(resultObject);
      });

      this.importRequestBody.next(jsonData);   
    };
   reader.readAsText(file);

  
  }

}
