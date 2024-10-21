import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'child2',
  template: `{{greetings}}`,
})
export class Child2Component implements OnInit {
  greetings: any = 'No Greetings yet!';

  constructor(private messagingService: MessagingService) {}

  ngOnInit(): void {
    this.messagingService.currentData.subscribe((data) => {
      this.greetings = data;
      console.log(this.greetings);
    });
  }
}
