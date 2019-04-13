import { Component, OnInit } from '@angular/core';
import { NotificationTypes } from '../../enums/notification.enum';
import { NotificationMessage } from '../../models/notification.model';
import { NotificationService } from '../../services';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationMessage[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.messages.subscribe((notification: NotificationMessage) => {

      if (!notification) {
        // clear alerts when an empty alert is received
        this.notifications = [];
        return;
      }

      // add alert to array
      this.notifications.push(notification);
    });
  }

  remove(notification: NotificationMessage) {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  classNames(notification: NotificationMessage) {
    if (!notification) {
      return;
    }

    // return css class based on notification type
    switch (notification.type) {
      case NotificationTypes.Success:
        return 'alert alert-success';
      case NotificationTypes.Error:
        return 'alert alert-danger';
      case NotificationTypes.Info:
      case NotificationTypes.Waiting:
        return 'alert alert-info';
      case NotificationTypes.Warning:
        return 'alert alert-warning';
    }
  }
}
