import { Injectable } from '@angular/core';
import { BehaviorSubject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() { }
}
