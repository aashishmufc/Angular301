import { Injectable } from '@angular/core';
import { LogPublisher, LogConsole, LogLocalStorage } from './log-publishers';

@Injectable({
  providedIn: 'root'
})
export class LogPublisherService {
  constructor() {
    // Build publishers arrays
    this.buildPublishers();
  }

  publishers: LogPublisher[] = [];

  buildPublishers(): void {
    this.publishers.push(new LogConsole());
    this.publishers.push(new LogLocalStorage());
  }
  getPublisher() {
    return this.publishers;
  }
}
