import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private url: string = 'http://localhost:8083/api/events';
  eventSource: EventSource = new EventSource(this.url);

  constructor() {}

  getServerSentEvent() {
    return new Observable((observer) => {
      this.eventSource.onopen = (event) =>
        console.log('opening connection: ', event);

      this.eventSource.onmessage = (event) => {
        console.log('message received: ', JSON.parse(event.data));
        observer.next(JSON.parse(event.data));
      };

      this.eventSource.onerror = (error) => {
        console.log('error: ', error);
        observer.error(error);
      };
    });
  }
}
