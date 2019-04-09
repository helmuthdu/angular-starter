import { Component, OnInit } from '@angular/core';
import { NotificationMessage } from './models/notification.model';
import { NotificationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.messages.subscribe((notification: NotificationMessage) => {
      console.log(notification);
    });
  }
}
