import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { catchError, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private _httpClient: HttpClient, private _dialog: MatDialog) { }

  public get = (url: string, params?: any): Observable<any> => this._httpClient.get(environment.webApiUrl+url, {params})
  .pipe(
    catchError(this._handleErrorFunc)
  );
  public post = (url: string, params?: any): Observable<any> => this._httpClient.post(environment.webApiUrl+url, params)
  .pipe(
    catchError(this._handleErrorFunc)
  );
  public put = (url: string, params: any): Observable<any> => this._httpClient.put(environment.webApiUrl+url, params)
  .pipe(
    catchError(this._handleErrorFunc)
  );
  public patch = (url: string, params: any): Observable<any> => this._httpClient.patch(environment.webApiUrl+url, params)
  .pipe(
    catchError(this._handleErrorFunc)
  );
  public delete = (url: string, params: any): Observable<any> => this._httpClient.delete(environment.webApiUrl+url, params)
  .pipe(
    catchError(this._handleErrorFunc)
  );

  public createTableRow = (url: string, formGroup: FormGroup) => this.post(url, formGroup.value);
  public updateTableRow = (url: string, event: any) => this.put(url, event.data).subscribe();

  private _handleErrorFunc = (err: any) => {
    this._dialog.open(ErrorDialogComponent, { data: err })
    console.log(err);
    return err;
  }
}
