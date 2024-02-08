import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedDataSubject = new Subject<any>();
  sharedData$ = this.sharedDataSubject.asObservable();

  updateSharedData(data: any) {
    this.sharedDataSubject.next(data);
  }
}
