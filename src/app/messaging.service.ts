import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  private dataSource = new Subject<String>();
  currentData: Observable<String> = this.dataSource.asObservable();

  constructor() {}

  changeData(data: String) {
    this.dataSource.next(data);
  }
}
