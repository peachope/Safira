import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new Subject();
  constructor() {}
  isSuccess = false;
  sendMes(product: any) {
    console.log(product);
    this.isSuccess = true;
    this.subject.next(product); //Trigger an event
  }
  getMes() {
    return this.subject.asObservable();
  }
}
