import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'child1',
  template: `
            <button (click)="sendMessageToSibling()">Hello to Bro</button>
  `,
})
export class Child1Component {
  constructor(private messagingService: MessagingService) {}

  sendMessageToSibling() {
    let message = 'Hi Bro!';
    this.messagingService.changeData(message);
  }
}
